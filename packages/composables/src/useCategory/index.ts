import {
  Context,
  UseCategory,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import type { Collection } from '@vue-storefront/vendure-api';
import type { UseCategorySearchParams } from '../types';

const useCategoryFactoryParams: UseCategoryFactoryParams<Collection, any> = {
  categorySearch: async (context: Context, params?: UseCategorySearchParams): Promise<Collection[]> => {
    // TODO: Fix problem with passing options
    const categorySearchParams = { options: { ...params?.searchParams } };
    const categoryResponse = await context.$vendure.api.getCategory(categorySearchParams, params?.customQuery);
    return categoryResponse?.data?.collections;
  }
};

const useCategory: (id: string) => UseCategory<Collection, any> = useCategoryFactory<Collection, any>(useCategoryFactoryParams);

export {
  useCategory,
  useCategoryFactoryParams
};
