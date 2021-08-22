import getPaymentMethods from '../../src/api/getPaymentMethods';
import eligiblePaymentMethodsQuery from '../../src/api/getPaymentMethods/eligiblePaymentMethodsQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getPaymentMethods', () => {
  it('returns shipping methods', async () => {
    const givenVariables = {};

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(eligiblePaymentMethodsQuery);

          return { data: 'get payment methods response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getPaymentMethods(context);

    expect(data).toBe('get payment methods response');
  });
});
