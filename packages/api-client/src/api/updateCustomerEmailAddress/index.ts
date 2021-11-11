import updateCustomerEmailAddressMutation from './updateCustomerEmailAddressMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, UpdateCustomerResponse, UpdateCustomerEmailAddressParams } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const updateCustomerEmailAddress = async (context: Context, params: UpdateCustomerEmailAddressParams, customQuery?: CustomQuery): Promise<UpdateCustomerResponse> => {
  const updateCustomerEmailAddressVariables = {
    password: params.password,
    newEmailAddress: params.newEmail
  };

  const { requestUpdateCustomerEmailAddress } = context.extendQuery(
    customQuery, { requestUpdateCustomerEmailAddress: { query: updateCustomerEmailAddressMutation, variables: updateCustomerEmailAddressVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${requestUpdateCustomerEmailAddress.query}`,
    variables: requestUpdateCustomerEmailAddress.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateCustomerResponse;

  return request;
};

export default updateCustomerEmailAddress;
