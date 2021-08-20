import { ApiClientExtension } from '@vue-storefront/core';
import { VENDURE_AUTH_TOKEN_NAME } from '../helpers/constants';

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
            res.cookie(VENDURE_AUTH_TOKEN_NAME, token, {
              httpOnly: true,
              secure: true,
              sameSite: 'strict'
            });
          },
          removeAuthCookie: () => {
            delete req.cookies[VENDURE_AUTH_TOKEN_NAME];
          }
        }
      })
    };
  }
};
