import addItemToOrderMutation from './addItemToOrderMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { AddToCartParams, AddToCartResponse, Context } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const addToCart = async (context: Context, params: AddToCartParams, customQuery?: CustomQuery): Promise<AddToCartResponse> => {
  const addToCartVariables = {
    ...params
  };

  const { addItemToOrder } = context.extendQuery(
    customQuery, { addItemToOrder: { query: addItemToOrderMutation, variables: addToCartVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${addItemToOrder.query}`,
    variables: addItemToOrder.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as AddToCartResponse;

  return request;
};

export default addToCart;
