import gql from 'graphql-tag';
import defaultQuery from './defaultQuery';
import ApolloClient, { ApolloQueryResult } from 'apollo-client';
import { CustomQuery, Context } from '@vue-storefront/core';
import { ProductData } from '../../types';

interface ProductParams {
  id: string;
  slug: string;
}

const getProduct = async (context: Context, params: ProductParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<ProductData>> => {
  const defaultVariables = {
    ...params
  };

  const { product } = context.extendQuery(
    customQuery, { product: { query: defaultQuery, variables: defaultVariables } }
  );

  try {
    const request = await (context.client as ApolloClient<any>).query<ProductData>({
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
