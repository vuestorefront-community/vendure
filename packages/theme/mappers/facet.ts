import { SearchInput, SearchResponse } from '@vue-storefront/vendure-api';
import { AgnosticSearchResult, SearchResultValue } from '@vue-storefront/vendure';
import { FacetSearchResult } from '@vue-storefront/core';
import { ITEMS_PER_PAGE } from '~/helpers';

export const getAgnosticSearchResult = (searchResultValue: SearchResultValue<SearchResponse, SearchInput>): FacetSearchResult<AgnosticSearchResult> => {
  const { data, input } = searchResultValue;

  const agnosticSearchResult = {
    data: {
      products: data?.items,
      categories: data?.collections,
      facets: data?.facetValues,
      total: data?.totalItems,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage: input?.take
    },
    input: {
      ...input,
      // In Vendure `sort:{ name: string, price: string }` while in VSF Core `sort: string`
      sort: input.sort as any
    }
  };

  return agnosticSearchResult;
};
