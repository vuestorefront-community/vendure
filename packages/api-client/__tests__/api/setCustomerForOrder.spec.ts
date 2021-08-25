import setCustomerForOrder from '../../src/api/setCustomerForOrder';
import setCustomerForOrderMutation from '../../src/api/setCustomerForOrder/setCustomerForOrderMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] setCustomerForOrder', () => {
  it('sets customer for certain order', async () => {
    const givenVariables = { firstName: 'test', lastName: 'test', emailAddress: 'test@test.com' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual({ input: givenVariables });
          expect(mutation).toEqual(setCustomerForOrderMutation);

          return { data: 'set customer for order response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await setCustomerForOrder(context, givenVariables);

    expect(data).toBe('set customer for order response');
  });
});
