
import { ApiClientExtension } from '@vue-storefront/core';

function getLocalisedUri(request, configuration) {
  const originalUri = configuration.api.uri;
  const api = {uri: originalUri + '?languageCode=' + request.cookies.i18n_redirected};
  return { api };
}

export const localiseExtension: ApiClientExtension = {
  name: 'localiseExtension',
  hooks(request) {
    return {
      beforeCreate: ({ configuration }) => ({
        ...configuration,
        ...getLocalisedUri(request, configuration)
      })
    };
  }
};
