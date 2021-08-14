import { Context, CustomQuery, FactoryParams } from '@vue-storefront/core';
import { SearchResponse } from '@vue-storefront/vendure-api';
import { SearchResultValue } from '../../../types';

export type SearchResultParams<SEARCH_DATA, SEARCH_INPUT> = SearchResultValue<SEARCH_DATA, SEARCH_INPUT> & { customQuery?: CustomQuery }

export interface UseFacetFactoryParams<SEARCH_DATA> extends FactoryParams {
  search: (context: Context, params?: SEARCH_DATA) => Promise<SearchResponse>;
}
