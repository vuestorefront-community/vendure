import updateCustomerMutation from './updateCustomerMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, UpdateCustomerInput, UpdateCustomerResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const updateCustomer = async (context: Context, params: UpdateCustomerInput, customQuery?: CustomQuery): Promise<UpdateCustomerResponse> => {
  const updateCustomerVariables = {
    input: params
  };

  const { updateCustomer } = context.extendQuery(
    customQuery, { updateCustomer: { query: updateCustomerMutation, variables: updateCustomerVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${updateCustomer.query}`,
    variables: updateCustomer.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as UpdateCustomerResponse;

  return request;
};

export default updateCustomer;
