import adjustOrderLineMutation from './adjustOrderLineMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, UpdateCartParams, UpdateCartQuantityResponse } from '../../types';

const updateCartQuantity = async (context: Context, params: UpdateCartParams, customQuery?: CustomQuery): Promise<UpdateCartQuantityResponse> => {
  const updateCartQuantityVariables = {
    ...params
  };

  const { adjustOrderLine } = context.extendQuery(
    customQuery, { adjustOrderLine: { query: adjustOrderLineMutation, variables: updateCartQuantityVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${adjustOrderLine.query}`,
    variables: adjustOrderLine.variables,
    fetchPolicy: 'no-cache'
  }) as UpdateCartQuantityResponse;

  return request;
};

export default updateCartQuantity;
