import { Context } from '@vue-storefront/core';
import type { SearchInput, SearchResponse } from '@vue-storefront/vendure-api';
import { UseRelatedProducts, useRelatedProductsFactory, UseRelatedProductsFactoryParams } from '../../factories';
import { SearchResultParams } from '../useFacet/interfaces';

const useRelatedProductsFactoryParams: UseRelatedProductsFactoryParams<any> = {
  load: async (context: Context, params?: SearchResultParams<SearchResponse, SearchInput> & { input: { sort?: string } }): Promise<SearchResponse> => {
    const searchParams = { input: { ...params?.input } };

    const searchResponse = await context.$vendure.api.getRelatedProducts(searchParams, params?.customQuery);

    return searchResponse?.data?.search;
  }
};

const useRelatedProducts: (cacheId: string) => UseRelatedProducts<any> = useRelatedProductsFactory<any>(useRelatedProductsFactoryParams);

export {
  useRelatedProducts,
  useRelatedProductsFactoryParams
};
