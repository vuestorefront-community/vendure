import setOrderBillingAddressMutation from './setOrderBillingAddressMutation';
import setOrderShippingAddressMutation from './setOrderShippingAddressMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, Order, UpdateAddressDetailsParams, UpdateAddressDetailsResponse } from '../../types';
import { ARRANGING_PAYMENT_STATE, BILLING_TYPE, NO_CACHE_FETCH_POLICY, isCustomerDataFilled } from '../../helpers';
import transitionOrderToState from '../transitionOrderToState';

const updateAddressDetails = async (context: Context, params: UpdateAddressDetailsParams, customQuery?: CustomQuery): Promise<UpdateAddressDetailsResponse> => {
  const { type, input } = params;
  const updateAddressDetailsVariables = { input };
  const isBilling = type === BILLING_TYPE;

  const updateAddressDetailsQuery = isBilling ? setOrderBillingAddressMutation : setOrderShippingAddressMutation;

  const { updateAddressDetails } = context.extendQuery(
    customQuery, { updateAddressDetails: { query: updateAddressDetailsQuery, variables: updateAddressDetailsVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${updateAddressDetails.query}`,
    variables: updateAddressDetails.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateAddressDetailsResponse;

  if (isBilling && isCustomerDataFilled(request?.data?.setOrderBillingAddress as Order)) {
    await transitionOrderToState(context, { state: ARRANGING_PAYMENT_STATE });
  }

  return request;
};

export default updateAddressDetails;
