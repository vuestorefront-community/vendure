import gql from 'graphql-tag';
import defaultQuery from './defaultQuery';
import ApolloClient, { ApolloQueryResult } from 'apollo-client';
import { CustomQuery, Context } from '@vue-storefront/core';
import { CategoryData } from '../../types';

interface CategoryParams {
  id: string;
}

// TODO: add types
const getCategory = async (context: Context, params: CategoryParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<CategoryData>> => {

  const defaultVariables = {
    ...params
  };

  const { collections } = context.extendQuery(customQuery,
    { collections: { query: defaultQuery, variables: defaultVariables } }
  );

  const request = await (context.client as ApolloClient<any>).query<CategoryData>({
    query: gql`${collections.query}`,
    variables: collections.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getCategory;
