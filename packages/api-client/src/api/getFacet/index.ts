import gql from 'graphql-tag';
import defaultQuery from './defaultQuery';
import ApolloClient, { ApolloQueryResult } from 'apollo-client';
import { CustomQuery, Context } from '@vue-storefront/core';
import type { FacetData, SearchInputParams } from '../../types';

// TODO: Later refactor this to useSearch instead. useFacet will be deprecated soon
const getFacet = async (context: Context, params: SearchInputParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<FacetData>> => {
  const defaultVariables = {
    ...params
  };

  const { search } = context.extendQuery(customQuery,
    { search: { query: defaultQuery, variables: defaultVariables } }
  );

  const request = await (context.client as ApolloClient<any>).query<FacetData>({
    query: gql`${search.query}`,
    variables: search.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getFacet;
