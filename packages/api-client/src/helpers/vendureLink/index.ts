import { Logger } from '@vue-storefront/core';
import { Config } from '../../types/setup';
import { apolloLinkFactory } from './graphQL';
import { authLinkFactory } from './linkHandlers';

export const createVendureConnection = (settings: Config): any => {
  Logger.debug('createVendureConnection');

  const authLink = authLinkFactory({ auth: settings.auth });

  const apolloLink = apolloLinkFactory(settings, { authLink });

  return {
    apolloLink
  };
};
