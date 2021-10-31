import createCustomerAddressMutation from './createCustomerAddressMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, CreateAddressInput, UpdateCustomerResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const createCustomerAddress = async (context: Context, params: CreateAddressInput, customQuery?: CustomQuery): Promise<UpdateCustomerResponse> => {
  const createCustomerAddressVariables = {
    input: params
  };

  const { createCustomerAddress } = context.extendQuery(
    customQuery, { createCustomerAddress: { query: createCustomerAddressMutation, variables: createCustomerAddressVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${createCustomerAddress.query}`,
    variables: createCustomerAddress.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateCustomerResponse;

  return request;
};

export default createCustomerAddress;
