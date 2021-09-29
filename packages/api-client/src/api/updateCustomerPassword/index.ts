import updateCustomerPasswordMutation from './updateCustomerPasswordMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, UpdateCustomerPasswordParams, UpdateCustomerPasswordResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const updateCustomerPassword = async (context: Context, params: UpdateCustomerPasswordParams, customQuery?: CustomQuery): Promise<UpdateCustomerPasswordResponse> => {
  const updateCustomerPasswordVariables = {
    ...params
  };

  const { updateCustomerPassword } = context.extendQuery(
    customQuery, { updateCustomerPassword: { query: updateCustomerPasswordMutation, variables: updateCustomerPasswordVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${updateCustomerPassword.query}`,
    variables: updateCustomerPassword.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateCustomerPasswordResponse;

  return request;
};

export default updateCustomerPassword;
