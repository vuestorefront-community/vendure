import { Context, CustomQuery } from '@vue-storefront/core';
import type { Product, ProductParams } from '@vue-storefront/vendure-api';

export const useProducts = async (context: Context, params?: ProductParams & { customQuery?: CustomQuery }): Promise<Product[]> => {
  const { customQuery, ...productSearchParams } = params;
  const productResponse = await context.$vendure.api.getProducts(productSearchParams, customQuery);
  return productResponse?.data.products;
};
