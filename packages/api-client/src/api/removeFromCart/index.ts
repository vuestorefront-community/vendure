import removeOrderLineMutation from './removeOrderLineMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, RemoveFromCartParams, RemoveFromCartResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const removeFromCart = async (context: Context, params: RemoveFromCartParams, customQuery?: CustomQuery): Promise<RemoveFromCartResponse> => {
  const removeFromCartVariables = {
    ...params
  };

  const { removeOrderLine } = context.extendQuery(
    customQuery, { removeOrderLine: { query: removeOrderLineMutation, variables: removeFromCartVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${removeOrderLine.query}`,
    variables: removeOrderLine.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as RemoveFromCartResponse;

  return request;
};

export default removeFromCart;
