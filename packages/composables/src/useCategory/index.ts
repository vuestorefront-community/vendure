import {
  Context,
  UseCategory,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
// import { Category } from './../types/GraphQL';

// TODO: add types
const useCategoryFactoryParams: UseCategoryFactoryParams<any, any> = {
  categorySearch: async (context: Context, searchParams?, customQuery?) => {
    const categoryResponse = await context.$vendure.api.getCategory(searchParams, customQuery);
    return categoryResponse.data.collections.items;
  }
};

// TODO: add types
const useCategory: (id: string) => UseCategory<any, any> = useCategoryFactory<any, any>(useCategoryFactoryParams);

export {
  useCategory,
  useCategoryFactoryParams
};
