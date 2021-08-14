import { useProductFactory, UseProduct, Context, CustomQuery, UseProductFactoryParams } from '@vue-storefront/core';
import type { Product, ProductFilter, ProductParams } from '@vue-storefront/vendure-api';

const useProductFactoryParams: UseProductFactoryParams<Product, ProductFilter> = {
  productsSearch: async (context: Context, params?: ProductParams & { customQuery?: CustomQuery }): Promise<Product> => {
    const { customQuery, ...productSearchParams } = params;
    const productResponse = await context.$vendure.api.getProduct(productSearchParams, customQuery);
    return productResponse?.data?.product;
  }
};

const useProduct: (cacheId: string) => UseProduct<Product, ProductFilter> = useProductFactory<Product, ProductFilter>(useProductFactoryParams);

export {
  useProduct,
  useProductFactoryParams
};
