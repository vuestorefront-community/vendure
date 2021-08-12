import gql from 'graphql-tag';
import productQuery from './productQuery';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import { Context, ProductParams, Product } from '../../types';

const getProduct = async (context: Context, params: ProductParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<Product>> => {
  const productVariables = {
    ...params
  };

  const { product } = context.extendQuery(
    customQuery, { product: { query: productQuery, variables: productVariables } }
  );

  const request = await context.client.query<Product>({
    query: gql`${product.query}`,
    variables: product.variables,
    fetchPolicy: 'no-cache'
  });
  return request;

};

export default getProduct;
