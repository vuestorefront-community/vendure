import deleteCustomerAddressMutation from './deleteCustomerAddressMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, DeleteCustomerAddress, UpdateCustomerResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const deleteCustomerAddress = async (context: Context, params: DeleteCustomerAddress, customQuery?: CustomQuery): Promise<UpdateCustomerResponse> => {
  const deleteCustomerAddressVariables = {
    ...params
  };

  const { deleteCustomerAddress } = context.extendQuery(
    customQuery, { deleteCustomerAddress: { query: deleteCustomerAddressMutation, variables: deleteCustomerAddressVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${deleteCustomerAddress.query}`,
    variables: deleteCustomerAddress.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateCustomerResponse;

  return request;
};

export default deleteCustomerAddress;
