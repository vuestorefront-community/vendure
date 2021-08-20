import { ClientConfig } from '../../types/setup';

export const defaultSettings: ClientConfig = {
  api: {
    uri: ''
  },
  auth: {
    getAuthCookie: () => '',
    setAuthCookie: (token) => token,
    removeAuthCookie: () => ''
  },
  currency: 'USD',
  lang: 'en'
};
