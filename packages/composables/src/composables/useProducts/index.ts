import { Context, CustomQuery } from '@vue-storefront/core';
import type { Product, ProductParams } from '@vue-storefront/vendure-api';

export const useProducts = async (context: Context, params?: ProductParams): Promise<Product[]> => {
  const { ...productSearchParams } = params;
  const productResponse = await context.$vendure.api.getProducts(productSearchParams);
  return productResponse?.data.products;
};
