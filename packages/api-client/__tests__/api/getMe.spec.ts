import getMe from '../../src/api/getMe';
import meQuery from '../../src/api/getMe/meQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getActiveCustomer', () => {
  it('returns current customer', async () => {
    const givenVariables = {};

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(meQuery);

          return { data: 'get me response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getMe(context);

    const expectedGetMe = 'get me response';

    expect(data).toBe(expectedGetMe);
  });
});
