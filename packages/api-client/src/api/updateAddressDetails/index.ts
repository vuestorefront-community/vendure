import setOrderBillingAddressMutation from './setOrderBillingAddressMutation';
import setOrderShippingAddressMutation from './setOrderShippingAddressMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, UpdateAddressDetailsParams, UpdateAddressDetailsResponse } from '../../types';
import { BILLING_TYPE } from '../../helpers/constants';

const updateAddressDetails = async (context: Context, params: UpdateAddressDetailsParams, customQuery?: CustomQuery): Promise<UpdateAddressDetailsResponse> => {
  const { type, input } = params;
  const updateAddressDetailsVariables = { input };

  const updateAddressDetailsQuery = type === BILLING_TYPE ? setOrderBillingAddressMutation : setOrderShippingAddressMutation;

  const { updateAddressDetails } = context.extendQuery(
    customQuery, { updateAddressDetails: { query: updateAddressDetailsQuery, variables: updateAddressDetailsVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${updateAddressDetails.query}`,
    variables: updateAddressDetails.variables,
    fetchPolicy: 'no-cache'
  }) as UpdateAddressDetailsResponse;

  return request;
};

export default updateAddressDetails;
