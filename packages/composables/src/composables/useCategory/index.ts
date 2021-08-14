import { Context, CustomQuery } from '@vue-storefront/core';
import type { CollectionList, CollectionParams } from '@vue-storefront/vendure-api';
import { UseCategory, useCategoryFactory, UseCategoryFactoryParams } from '../../factories';

const useCategoryFactoryParams: UseCategoryFactoryParams<CollectionList, any> = {
  categorySearch: async (context: Context, params?: CollectionParams & { customQuery?: CustomQuery }): Promise<CollectionList> => {
    const categorySearchParams = { options: { ...params?.options } };
    const categoryResponse = await context.$vendure.api.getCategory(categorySearchParams, params?.customQuery);
    return categoryResponse?.data?.collections;
  }
};

const useCategory: (id: string) => UseCategory<CollectionList, any> = useCategoryFactory<CollectionList, any>(useCategoryFactoryParams);

export {
  useCategory,
  useCategoryFactoryParams
};
