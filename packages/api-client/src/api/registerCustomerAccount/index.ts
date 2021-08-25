import registerCustomerAccountMutation from './registerCustomerAccountMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, RegisterCustomerAccountResponse, RegisterCustomerInput } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const registerCustomerAccount = async (context: Context, params: RegisterCustomerInput, customQuery?: CustomQuery): Promise<RegisterCustomerAccountResponse> => {
  const registerCustomerAccountVariables = {
    input: params
  };

  const { registerCustomerAccount } = context.extendQuery(
    customQuery, { registerCustomerAccount: { query: registerCustomerAccountMutation, variables: registerCustomerAccountVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${registerCustomerAccount.query}`,
    variables: registerCustomerAccount.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as RegisterCustomerAccountResponse;

  return request;
};

export default registerCustomerAccount;
