import gql from 'graphql-tag';
import activeCustomerQuery from './activeCustomerQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, GetMeResponse, Customer } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const getMe = async (context: Context, customQuery?: CustomQuery): Promise<GetMeResponse> => {
  const getMeVariables = {};

  const { getMe } = context.extendQuery(
    customQuery, { getMe: { query: activeCustomerQuery, variables: getMeVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'activeCustomer', Customer>>({
    query: gql`${getMe.query}`,
    variables: getMe.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });
  return request;

};

export default getMe;
