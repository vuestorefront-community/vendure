import { apiClientFactory } from '@vue-storefront/core';
import * as api from './api';
import { ClientInstance, Config } from './types/setup';
import { apolloClientFactory } from './helpers/vendureLink/graphQL';
import { createVendureConnection } from './helpers/vendureLink';
import { defaultSettings } from './helpers/apiClient/defaultSettings';
import { extensions } from './extensions';

const onCreate = (
  settings: Config
): { config: Config; client: ClientInstance } => {
  const config = {
    ...defaultSettings,
    ...settings
  } as Config;

  if (settings.client) {
    return {
      client: settings.client,
      config
    };
  }

  if (settings.customOptions && settings.customOptions.link) {
    return {
      client: apolloClientFactory(settings.customOptions),
      config
    };
  }

  const { apolloLink } = createVendureConnection(config);

  const client = apolloClientFactory({
    link: apolloLink,
    ...settings.customOptions
  });

  return {
    config,
    client
  };
};

const { createApiClient } = apiClientFactory({
  onCreate,
  api,
  extensions
});

export { createApiClient };
