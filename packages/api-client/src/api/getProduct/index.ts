import gql from 'graphql-tag';
import productQuery from './productQuery';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import { ProductData, Context } from '../../types';

interface ProductParams {
  id?: string;
  slug?: string;
}

const getProduct = async (context: Context, params: ProductParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<ProductData>> => {
  const productVariables = {
    ...params
  };

  const { product } = context.extendQuery(
    customQuery, { product: { query: productQuery, variables: productVariables } }
  );

  try {
    const request = await context.client.query<ProductData>({
      query: gql`${product.query}`,
      variables: product.variables,
      // temporary, seems like bug in apollo:
      // @link: https://github.com/apollographql/apollo-client/issues/3234
      fetchPolicy: 'no-cache'
    });
    return request;
  } catch (error) {
    throw error.graphQLErrors?.[0] || error.networkError?.result || error;
  }

};

export default getProduct;
