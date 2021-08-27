import logout from '../../src/api/logout';
import logoutMutation from '../../src/api/logout/logoutMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] logout', () => {
  it('logout', async () => {
    const givenVariables = {};

    const context = {
      config: {
        auth: {
          removeAuthCookie: () => ''
        }
      },
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(logoutMutation);

          return { data: 'logout response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await logout(context);

    const expectedLogout = 'logout response';

    expect(data).toBe(expectedLogout);
  });
});
