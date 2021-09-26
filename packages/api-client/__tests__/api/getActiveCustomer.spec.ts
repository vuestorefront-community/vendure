import getActiveCustomer from '../../src/api/getActiveCustomer';
import activeCustomerQuery from '../../src/api/getActiveCustomer/activeCustomerQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getActiveCustomer', () => {
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

    const { data } = await getActiveCustomer(context);

    const expectedGetMe = 'get me response';

    expect(data).toBe(expectedGetMe);
  });
});
