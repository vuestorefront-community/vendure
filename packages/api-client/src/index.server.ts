import * as api from "./api";
import { apiClientFactory } from "@vue-storefront/core";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { apolloClientFactory } from "./helpers/vendureLink/graphQL";
import { defaultSettings } from "./helpers/apiClient/defaultSettings";
import { createVendureConnection } from "./helpers/vendureLink";

const onCreate = (settings) => {
  const config = {
    ...defaultSettings,
    ...settings,
    state: settings.state || defaultSettings.state,
  };

  if (settings.client) {
    return {
      client: settings.client,
      config,
    };
  }

  if (settings.customOptions && settings.customOptions.link) {
    return {
      client: apolloClientFactory(settings.customOptions),
      config,
    };
  }

  const { apolloLink } = createVendureConnection(config);

  const client = apolloClientFactory({
    link: apolloLink,
    ...settings.customOptions,
  });

  return {
    config,
    client,
  };
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api,
});

export { createApiClient };
