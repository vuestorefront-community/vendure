import transitionOrderToStateMutation from './transitionOrderToStateMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, TransitionOrderToState, TransitionOrderToStateParams } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const transitionOrderToState = async (context: Context, params: TransitionOrderToStateParams, customQuery?: CustomQuery): Promise<TransitionOrderToState> => {
  const transitionOrderToStateVariables = {
    ...params
  };

  const { transitionOrderToState } = context.extendQuery(
    customQuery, { transitionOrderToState: { query: transitionOrderToStateMutation, variables: transitionOrderToStateVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${transitionOrderToState.query}`,
    variables: transitionOrderToState.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as TransitionOrderToState;

  return request;
};

export default transitionOrderToState;
