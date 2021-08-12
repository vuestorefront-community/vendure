import gql from 'graphql-tag';
import collectionsQuery from './collectionsQuery';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import type { CollectionList, CollectionParams, Context } from '../../types';

const getCategory = async (context: Context, params: CollectionParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<CollectionList>> => {
  const collectionsVariables = {
    ...params
  };

  const { collections } = context.extendQuery(customQuery,
    { collections: { query: collectionsQuery, variables: collectionsVariables } }
  );

  const request = await context.client.query<CollectionList>({
    query: gql`${collections.query}`,
    variables: collections.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getCategory;
