import { ApiClientExtension } from '@vue-storefront/core';
import { VENDURE_AUTH_TOKEN_NAME } from '../helpers/constants';
import { cookieOptions } from '../helpers';

export const tokenExtension: ApiClientExtension = {
  name: 'tokenExtension',
  hooks: (req, res) => {
    return {
      beforeCreate: ({ configuration }) => ({
        ...configuration,
        auth: {
          getAuthCookie: () => req.cookies[VENDURE_AUTH_TOKEN_NAME],
          setAuthCookie: (token) => {
            if (!token) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies[VENDURE_AUTH_TOKEN_NAME];
              return;
            }
            res.cookie(VENDURE_AUTH_TOKEN_NAME, token, cookieOptions);
          },
          removeAuthCookie: () => {
            // Remove cookie by expiring it immediately
            res.cookie(VENDURE_AUTH_TOKEN_NAME, '', { expires: new Date(Date.now()) });
          }
        }
      })
    };
  }
};
