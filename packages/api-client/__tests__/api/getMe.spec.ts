import getMe from '../../src/api/getMe';
import activeCustomerQuery from '../../src/api/getMe/activeCustomerQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getMe', () => {
  it('returns current customer', async () => {
    const givenVariables = {};

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(activeCustomerQuery);

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
