import gql from 'graphql-tag';
import activeCustomerQuery from './activeCustomerQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, GetActiveCustomerResponse, Customer } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const getActiveCustomer = async (context: Context, customQuery?: CustomQuery): Promise<GetActiveCustomerResponse> => {
  const getActiveCustomerVariables = {};

  const { getActiveCustomer } = context.extendQuery(
    customQuery, { getActiveCustomer: { query: activeCustomerQuery, variables: getActiveCustomerVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'activeCustomer', Customer>>({
    query: gql`${getActiveCustomer.query}`,
    variables: getActiveCustomer.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });
  return request;

};

export default getActiveCustomer;
