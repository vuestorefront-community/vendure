import gql from 'graphql-tag';
import collectionsQuery from './collectionsQuery';
import { CustomQuery } from '@vue-storefront/core';
import type { CollectionList, CollectionParams, Context, GetCategoryResponse, RequestDataStructure } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const getCategory = async (context: Context, params: CollectionParams, customQuery?: CustomQuery): Promise<GetCategoryResponse> => {
  const collectionsVariables = {
    ...params
  };

  const { collections } = context.extendQuery(customQuery,
    { collections: { query: collectionsQuery, variables: collectionsVariables } }
  );

  const request = await context.client.query<RequestDataStructure<'collections', CollectionList>>({
    query: gql`${collections.query}`,
    variables: collections.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  });

  return request;
};

export default getCategory;
