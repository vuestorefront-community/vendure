import gql from 'graphql-tag';
import searchQuery from './searchQuery';
import { CustomQuery } from '@vue-storefront/core';
import type { Context, GetFacetResponse, RequestDataStructure, SearchParams, SearchResponse } from '../../types';

// TODO: Later refactor this to useSearch instead. useFacet will be deprecated soon
const getFacet = async (context: Context, params: SearchParams, customQuery?: CustomQuery): Promise<GetFacetResponse> => {
  const searchVariables = {
    ...params
  };

  const { search } = context.extendQuery(customQuery,
    { search: { query: searchQuery, variables: searchVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'search', SearchResponse>>({
    query: gql`${search.query}`,
    variables: search.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getFacet;
