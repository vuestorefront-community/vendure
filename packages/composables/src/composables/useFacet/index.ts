import {
  Context,
  UseFacet
} from '@vue-storefront/core';
import type { SearchInput, SearchResponse } from '@vue-storefront/vendure-api';
import { SearchResultParams, UseFacetFactoryParams } from './interfaces';

declare const useFacetFactory: <SEARCH_DATA>(factoryParams: UseFacetFactoryParams<SEARCH_DATA>) => (id?: string) => UseFacet<SearchResultParams<SearchResponse, SearchInput>>;

const useFacetFactoryParams: UseFacetFactoryParams<SearchResultParams<SearchResponse, SearchInput>> = {
  search: async (context: Context, params?: SearchResultParams<SearchResponse, SearchInput>): Promise<SearchResponse> => {
    const searchParams = { input: { ...params?.input } };

    const searchResponse = await context.$vendure.api.getFacet(searchParams, params?.customQuery);

    return searchResponse?.data?.search;
  }
};

const useFacet: () => UseFacet<SearchResultParams<SearchResponse, SearchInput>> = useFacetFactory<SearchResultParams<SearchResponse, SearchInput>>(useFacetFactoryParams);

export {
  useFacet,
  useFacetFactoryParams
}
