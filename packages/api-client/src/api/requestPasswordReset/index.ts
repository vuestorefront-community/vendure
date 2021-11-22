import requestPasswordResetMutation from './requestPasswordResetMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, RequestPasswordResetResponse, RequestPasswordResetParams} from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const requestPasswordReset = async (context: Context, params: RequestPasswordResetParams, customQuery?: CustomQuery): Promise<RequestPasswordResetResponse> => {
  const requestPasswordResetVariables = {
    ...params
  };

  const { requestPasswordReset } = context.extendQuery(
    customQuery, { requestPasswordReset: { query: requestPasswordResetMutation, variables: requestPasswordResetVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${requestPasswordReset.query}`,
    variables: requestPasswordReset.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as RequestPasswordResetResponse;

  return request;
};

export default requestPasswordReset;
