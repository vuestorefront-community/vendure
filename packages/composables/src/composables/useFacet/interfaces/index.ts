import { Context, CustomQuery, FactoryParams } from "@vue-storefront/core";
import { SearchInput, SearchResponse } from "@vue-storefront/vendure-api";

export interface SearchResultParams<SEARCH_DATA, SEARCH_INPUT> {
  data?: SEARCH_DATA;
  input?: SEARCH_INPUT;
  customQuery?: CustomQuery
}

export interface UseFacetFactoryParams<SEARCH_DATA> extends FactoryParams {
  search: (context: Context, params?: SEARCH_DATA) => Promise<SearchResponse>;
}