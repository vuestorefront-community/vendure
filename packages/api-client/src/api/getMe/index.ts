import gql from 'graphql-tag';
import meQuery from './meQuery';
import { CustomQuery } from '@vue-storefront/core';
import { Context, RequestDataStructure, GetMeResponse, CurrentUser } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const getMe = async (context: Context, customQuery?: CustomQuery): Promise<GetMeResponse> => {
  const getMeVariables = {};

  const { getMe } = context.extendQuery(
    customQuery, { getMe: { query: meQuery, variables: getMeVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'me', CurrentUser>>({
    query: gql`${getMe.query}`,
    variables: getMe.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });
  return request;

};

export default getMe;
