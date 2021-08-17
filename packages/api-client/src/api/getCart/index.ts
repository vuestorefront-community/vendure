import gql from 'graphql-tag';
import activeOrderQuery from './activeOrderQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, GetCartResponse, Order } from '../../types';

const getCart = async (context: Context, customQuery?: CustomQuery): Promise<GetCartResponse> => {
  const getCartVariables = {};

  const { product } = context.extendQuery(
    customQuery, { product: { query: activeOrderQuery, variables: getCartVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'activeOrder', Order>>({
    query: gql`${product.query}`,
    variables: product.variables,
    fetchPolicy: 'no-cache'
  });
  return request;

};

export default getCart;
