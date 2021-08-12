import gql from 'graphql-tag';
import defaultQuery from './defaultQuery';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import type { FacetData, SearchInputParams, Context } from '../../types';

// TODO: Later refactor this to useSearch instead. useFacet will be deprecated soon
const getFacet = async (context: Context, params: SearchInputParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<FacetData>> => {
  const defaultVariables = {
    ...params
  };

  const { search } = context.extendQuery(customQuery,
    { search: { query: defaultQuery, variables: defaultVariables } }
  );

  const request = await context.client.query<FacetData>({
    query: gql`${search.query}`,
    variables: search.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getFacet;
