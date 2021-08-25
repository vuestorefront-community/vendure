import getShippingMethods from '../../src/api/getShippingMethods';
import eligibleShippingMethodsQuery from '../../src/api/getShippingMethods/eligibleShippingMethodsQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getShippingMethods', () => {
  it('returns shipping methods', async () => {
    const givenVariables = {};

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(eligibleShippingMethodsQuery);

          return { data: 'get shipping methods response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getShippingMethods(context);

    const expectedGetShippingMethods = 'get shipping methods response';

    expect(data).toBe(expectedGetShippingMethods);
  });
});
