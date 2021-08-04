import gql from 'graphql-tag';
import defaultQuery from './defaultQuery';
import ApolloClient from 'apollo-client';
import { CustomQuery, Context } from '@vue-storefront/core';

// TODO: add types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getCategory = async (context: Context, params, customQuery?: CustomQuery): Promise<unknown> => {

  const defaultVariables = {
    ...params
  };

  const { collections } = context.extendQuery(customQuery,
    { collections: { query: defaultQuery, variables: defaultVariables } }
  );

  const request = await (context.client as ApolloClient<any>).query<any>({
    query: gql`${collections.query}`,
    variables: collections.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getCategory;
