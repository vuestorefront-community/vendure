import gql from 'graphql-tag';
import productQuery from './productsQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, ProductParams, Product, GetProductsResponse, RequestDataStructure } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const getProducts = async (context: Context, params: ProductParams, customQuery?: CustomQuery): Promise<GetProductsResponse> => {
  const productVariables = {
    ...params
  };

  const { products } = context.extendQuery(
    customQuery, { products: { query: productQuery, variables: productVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'products', Product[]>>({
    query: gql`${products.query}`,
    variables: products.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });

  return request;
};

export default getProducts;
