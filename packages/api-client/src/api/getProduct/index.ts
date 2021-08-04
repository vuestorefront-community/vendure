import gql from 'graphql-tag';
// import { ProductQueryResult } from '../../types/GraphQL';
import defaultQuery from './defaultQuery';
// import { buildProductWhere } from '../../helpers/search';
import ApolloClient from 'apollo-client';
import { CustomQuery, Context } from '@vue-storefront/core';

// export interface ProductData {
//   products: ProductQueryResult;
// }

export interface ProductParams {
  id: number
}

// TODO: add types
const getProduct = async (context: Context, params: ProductParams, customQuery?: CustomQuery): Promise<unknown> => {
//   const { locale, acceptLanguage, currency, country } = context.config;

  const defaultVariables = {
    ...params
  };

  const { product } = context.extendQuery(
    customQuery, { product: { query: defaultQuery, variables: defaultVariables } }
  );

  try {
    const request = await (context.client as ApolloClient<any>).query<unknown>({
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
