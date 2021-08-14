import {
  Context,
  FacetSearchResult,
  useFacetFactory
} from '@vue-storefront/core';
import type { SearchInput, SearchResponse } from '@vue-storefront/vendure-api';
import { SearchResultParams, UseFacetFactoryParams } from './interfaces';

const useFacetFactoryParams: UseFacetFactoryParams<FacetSearchResult<SearchResponse>> = {
  // TODO: Fix this with custom type/interface. In Vendure `sort: SearchResultSortParameter` while in VSF Core `sort: string`
  search: async (context: Context, params?: SearchResultParams<SearchResponse, SearchInput> & { input: { sort?: string } }): Promise<SearchResponse> => {
    const searchParams = { input: { ...params?.input } };

    const searchResponse = await context.$vendure.api.getFacet(searchParams, params?.customQuery);

    return searchResponse?.data?.search;
  }
};

const useFacet = useFacetFactory<SearchResponse>(useFacetFactoryParams);

export {
  useFacet,
  useFacetFactoryParams
};
