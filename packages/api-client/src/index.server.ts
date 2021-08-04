import { apiClientFactory } from '@vue-storefront/core';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import fetch from 'isomorphic-fetch';
import * as api from './api';
import { Config } from './types';

const defaultSettings = {};

function onCreate(settings: Config): { config: Config, client: ApolloClient } {
  const httpLink = createHttpLink({ uri: settings.api.uri, fetch });
  return {
    config: {
      ...settings,
      ...defaultSettings
    },
    client: new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([httpLink])
    })
  };
}

// TODO: add extensions here later
const extensions = [];

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api,
  extensions
});

export {
  createApiClient
};
