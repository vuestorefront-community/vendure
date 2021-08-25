import gql from 'graphql-tag';
import eligibleShippingMethodsQuery from './eligibleShippingMethodsQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, GetShippingMethodsResponse, ShippingMethodQuote } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const getShippingMethods = async (context: Context, customQuery?: CustomQuery): Promise<GetShippingMethodsResponse> => {
  const getShippingMethods = {};

  const { eligibleShippingMethods } = context.extendQuery(
    customQuery, { eligibleShippingMethods: { query: eligibleShippingMethodsQuery, variables: getShippingMethods } }
  );

  const request = await context.client.query<RequestDataStructure<'eligibleShippingMethods', ShippingMethodQuote[]>>({
    query: gql`${eligibleShippingMethods.query}`,
    variables: eligibleShippingMethods.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });
  return request;

};

export default getShippingMethods;
