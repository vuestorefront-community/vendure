import setPaymentMethod from '../../src/api/setPaymentMethod';
import addPaymentToOrderMutation from '../../src/api/setPaymentMethod/addPaymentToOrderMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] setPaymentMethod', () => {
  it('sets payment method for certain order', async () => {
    const givenVariables = { metadata: {}, method: 'test' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual({ input: givenVariables });
          expect(mutation).toEqual(addPaymentToOrderMutation);

          return { data: 'set payment method response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await setPaymentMethod(context, { metadata: {}, method: 'test' });

    const expectedSetPaymentResponse = 'set payment method response';

    expect(data).toBe(expectedSetPaymentResponse);
  });
});
