import setShippingMethod from '../../src/api/setShippingMethod';
import setOrderShippingMethodMutation from '../../src/api/setShippingMethod/setOrderShippingMethodMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] setShippingMethod', () => {
  it('sets shipping method for certain order', async () => {
    const givenVariables = { shippingMethodId: '1'};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(setOrderShippingMethodMutation);

          return { data: 'set shipping method response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await setShippingMethod(context, { shippingMethodId: '1' });

    const expectedShippingMethod = 'set shipping method response';

    expect(data).toBe(expectedShippingMethod);
  });
});
