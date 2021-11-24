import resetPasswordMutation from './resetPasswordMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, ResetPasswordResponse, ResetPasswordParams} from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const resetPassword = async (context: Context, params: ResetPasswordParams, customQuery?: CustomQuery): Promise<ResetPasswordResponse> => {
  const ResetPasswordVariables = {
    ...params
  };

  const { resetPassword } = context.extendQuery(
    customQuery, { resetPassword: { query: resetPasswordMutation, variables: ResetPasswordVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${resetPassword.query}`,
    variables: resetPassword.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as ResetPasswordResponse;

  return request;
};

export default resetPassword;
