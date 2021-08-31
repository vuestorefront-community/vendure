import addPaymentToOrderMutation from './addPaymentToOrderMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, PaymentInput, SetPaymentMethodResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const setPaymentMethod = async (context: Context, params: PaymentInput, customQuery?: CustomQuery): Promise<SetPaymentMethodResponse> => {
  const setPaymentMethodVariables = {
    input: params
  };

  const { addPaymentToOrder } = context.extendQuery(
    customQuery, { addPaymentToOrder: { query: addPaymentToOrderMutation, variables: setPaymentMethodVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${addPaymentToOrder.query}`,
    variables: addPaymentToOrder.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as SetPaymentMethodResponse;

  return request;
};

export default setPaymentMethod;
