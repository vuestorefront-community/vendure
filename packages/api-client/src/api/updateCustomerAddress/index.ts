import updateCustomerAddressMutation from './updateCustomerAddressMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, UpdateAddressInput, UpdateCustomerResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const updateCustomerAddress = async (context: Context, params: UpdateAddressInput, customQuery?: CustomQuery): Promise<UpdateCustomerResponse> => {
  const updateCustomerAddressVariables = {
    input: params
  };

  const { updateCustomerAddress } = context.extendQuery(
    customQuery, { updateCustomerAddress: { query: updateCustomerAddressMutation, variables: updateCustomerAddressVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${updateCustomerAddress.query}`,
    variables: updateCustomerAddress.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateCustomerResponse;

  return request;
};

export default updateCustomerAddress;
