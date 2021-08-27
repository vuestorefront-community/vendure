import login from '../../src/api/login';
import loginMutation from '../../src/api/login/loginMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] login', () => {
  it('login', async () => {
    const givenVariables = { username: 'john.doe@gmail.com', password: 'test1234' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(loginMutation);

          return { data: 'login response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await login(context, { username: 'john.doe@gmail.com', password: 'test1234' });

    const expectedLogin = 'login response';

    expect(data).toBe(expectedLogin);
  });
});
