import gql from 'graphql-tag';
import eligibleShippingMethodsQuery from './eligibleShippingMethodsQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, GetShippingMethodsResponse, PaymentMethodQuote } from '../../types';

const getShippingMethods = async (context: Context, customQuery?: CustomQuery): Promise<GetShippingMethodsResponse> => {
  const getShippingMethods = {};

  const { eligibleShippingMethods } = context.extendQuery(
    customQuery, { eligibleShippingMethods: { query: eligibleShippingMethodsQuery, variables: getShippingMethods } }
  );

  const request = await context.client.query<RequestDataStructure<'eligiblePaymentMethods', PaymentMethodQuote[]>>({
    query: gql`${eligibleShippingMethods.query}`,
    variables: eligibleShippingMethods.variables,
    fetchPolicy: 'no-cache'
  });
  return request;

};

export default getShippingMethods;
