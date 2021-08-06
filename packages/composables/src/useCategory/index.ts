import {
  Context,
  UseCategory,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import type { Collection } from '@vue-storefront/vendure-api';
import type { UseCategorySearchParams } from '../types';

// TODO: add types
const useCategoryFactoryParams: UseCategoryFactoryParams<Collection, any> = {
  categorySearch: async (context: Context, { customQuery, searchParams }: UseCategorySearchParams) => {
    const categorySearchParams = { options: { ...searchParams } };
    const categoryResponse = await context.$vendure.api.getCategory(categorySearchParams, customQuery);
    return categoryResponse?.data?.collections;
  }
};

// TODO: add types
const useCategory: (id: string) => UseCategory<Collection, any> = useCategoryFactory<Collection, any>(useCategoryFactoryParams);

export {
  useCategory,
  useCategoryFactoryParams
};
