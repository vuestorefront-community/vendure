import gql from 'graphql-tag';
import collectionsQuery from './collectionsQuery';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import type { CategoryData, CategoryParams, Context } from '../../types';

const getCategory = async (context: Context, params: CategoryParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<CategoryData>> => {
  const collectionsVariables = {
    ...params
  };

  const { collections } = context.extendQuery(customQuery,
    { collections: { query: collectionsQuery, variables: collectionsVariables } }
  );

  const request = await context.client.query<CategoryData>({
    query: gql`${collections.query}`,
    variables: collections.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getCategory;
