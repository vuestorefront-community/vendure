import {
  Context,
  useFacetFactory,
  FacetSearchResult
} from '@vue-storefront/core';
import type { FacetResultsData } from '@vue-storefront/vendure-api';

const ITEMS_PER_PAGE = [20, 40, 100];

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<FacetResultsData>): Promise<FacetResultsData> => {
    const { customQuery, ...rest } = params.input;
    const searchParams = { input: { ...rest.input } };
    const itemsPerPage = searchParams?.input?.take;

    const facetResponse = await context.$vendure.api.getFacet(searchParams, customQuery);

    const responseData = facetResponse?.data?.search;

    return {
      products: responseData?.items,
      categories: responseData?.collections,
      facets: responseData?.facetValues,
      total: responseData?.totalItems,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage
    };
  }
};

export const useFacet = useFacetFactory<FacetResultsData>(factoryParams);
