import loginMutation from './loginMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, LoginParams, LoginResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const login = async (context: Context, params: LoginParams, customQuery?: CustomQuery): Promise<LoginResponse> => {
  const loginVariables = {
    ...params
  };

  const { login } = context.extendQuery(
    customQuery, { login: { query: loginMutation, variables: loginVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${login.query}`,
    variables: login.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as LoginResponse;

  return request;
};

export default login;
