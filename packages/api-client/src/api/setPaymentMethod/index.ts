import addPaymentToOrderMutation from './addPaymentToOrderMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, PaymentInput, SetShippingMethodResponse } from '../../types';

const setPaymentMethod = async (context: Context, params: PaymentInput, customQuery?: CustomQuery): Promise<SetShippingMethodResponse> => {
  const setPaymentMethodVariables = {
    input: params
  };

  const { addPaymentToOrder } = context.extendQuery(
    customQuery, { addPaymentToOrder: { query: addPaymentToOrderMutation, variables: setPaymentMethodVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${addPaymentToOrder.query}`,
    variables: addPaymentToOrder.variables,
    fetchPolicy: 'no-cache'
  }) as SetShippingMethodResponse;

  return request;
};

export default setPaymentMethod;
