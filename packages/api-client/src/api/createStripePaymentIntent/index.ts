import gql from 'graphql-tag';
import createStripePaymentIntentMutation from './createStripePaymentIntentMutation';
import { CustomQuery } from '@vue-storefront/core';
import { Context } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';
import { ApolloQueryResult } from 'apollo-client';

const createStripePaymentIntent = async (context: Context, customQuery?: CustomQuery): Promise<ApolloQueryResult<string>> => {

  const { createStripePaymentIntent } = context.extendQuery(
    customQuery, { createStripePaymentIntent: { query: createStripePaymentIntentMutation, variables: {} } }
  );

  const request = await context.client.query<string>({
    query: gql`${createStripePaymentIntent.query}`,
    variables: {},
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });
  return request;

};

export default createStripePaymentIntent;
