import gql from 'graphql-tag';
import searchQuery from './searchQuery';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import type { Context, SearchParams, SearchResponse } from '../../types';

// TODO: Later refactor this to useSearch instead. useFacet will be deprecated soon
const getFacet = async (context: Context, params: SearchParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<SearchResponse>> => {
  const searchVariables = {
    ...params
  };

  const { search } = context.extendQuery(customQuery,
    { search: { query: searchQuery, variables: searchVariables } }
  );

  const request = await context.client.query<SearchResponse>({
    query: gql`${search.query}`,
    variables: search.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getFacet;
