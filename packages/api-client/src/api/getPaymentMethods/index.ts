import gql from 'graphql-tag';
import eligiblePaymentMethodsQuery from './eligiblePaymentMethodsQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, PaymentMethodQuote, GetPaymentMethodsResponse } from '../../types';

const getPaymentMethods = async (context: Context, customQuery?: CustomQuery): Promise<GetPaymentMethodsResponse> => {
  const getPaymentMethodsVariables = {};

  const { eligiblePaymentMethods } = context.extendQuery(
    customQuery, { eligiblePaymentMethods: { query: eligiblePaymentMethodsQuery, variables: getPaymentMethodsVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'eligiblePaymentMethods', PaymentMethodQuote[]>>({
    query: gql`${eligiblePaymentMethods.query}`,
    variables: eligiblePaymentMethods.variables,
    fetchPolicy: 'no-cache'
  });
  return request;

};

export default getPaymentMethods;
