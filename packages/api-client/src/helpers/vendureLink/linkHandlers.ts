import { Logger } from '@vue-storefront/core';
import { setContext } from 'apollo-link-context';
import { AuthMethods } from '../../types/setup';

export const handleRetry = () => (count: number, operation: { operationName: any; }, error: { result: { message: string; }; }): boolean => {
  if (count > 3) {
    return false;
  }

  if (error?.result?.message === 'invalid_token') {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    Logger.debug(`Apollo retry-link, the operation (${operation.operationName}) sent with wrong token, creating a new one... (attempt: ${count})`);
    return true;
  }

  return false;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const authLinkFactory = ({ auth }: {
  auth: AuthMethods;
}) => setContext((apolloReq, { headers }) => {
  Logger.debug('Apollo authLinkFactory', apolloReq.operationName);
  const token: string = auth.getAuthCookie();

  if (token) {
    Logger.debug('Apollo authLinkFactory, finished, token: ', token);
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
