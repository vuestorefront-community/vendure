import setCustomerForOrderMutation from './setCustomerForOrderMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, CreateCustomerInput, SetCustomerForOrderResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const setCustomerForOrder = async (context: Context, params: CreateCustomerInput, customQuery?: CustomQuery): Promise<SetCustomerForOrderResponse> => {
  const setCustomerForOrderVariables = {
    input: params
  };

  const { setCustomerForOrder } = context.extendQuery(
    customQuery, { setCustomerForOrder: { query: setCustomerForOrderMutation, variables: setCustomerForOrderVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${setCustomerForOrder.query}`,
    variables: setCustomerForOrder.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as SetCustomerForOrderResponse;

  return request;
};

export default setCustomerForOrder;
