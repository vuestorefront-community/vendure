import removeOrderLineMutation from './removeOrderLineMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, removeFromCartParams, RemoveFromCartResponse } from '../../types';

const removeFromCart = async (context: Context, params: removeFromCartParams, customQuery?: CustomQuery): Promise<RemoveFromCartResponse> => {
  const removeFromCartVariables = {
    ...params
  };

  const { removeOrderLine } = context.extendQuery(
    customQuery, { removeOrderLine: { query: removeOrderLineMutation, variables: removeFromCartVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${removeOrderLine.query}`,
    variables: removeOrderLine.variables,
    fetchPolicy: 'no-cache'
  }) as RemoveFromCartResponse;

  return request;
};

export default removeFromCart;
