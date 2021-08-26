import logoutMutation from './logoutMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, LogoutResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const logout = async (context: Context, customQuery?: CustomQuery): Promise<LogoutResponse> => {
  const logoutVariables = {};

  const { logout } = context.extendQuery(
    customQuery, { logout: { query: logoutMutation, variables: logoutVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${logout.query}`,
    variables: logout.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as LogoutResponse;

  context.config.auth.removeAuthCookie();

  return request;
};

export default logout;
