import setPaymentMethod from '../../src/api/setPaymentMethod';
import addPaymentToOrderMutation from '../../src/api/setPaymentMethod/addPaymentToOrderMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] setPaymentMethod', () => {
  it('sets payment method for certain order', async () => {
    const givenVariables = { metadata: { id: '1' }, method: 'test' };

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

    const { data } = await setPaymentMethod(context, { metadata: { id: '1' }, method: 'test' });

    expect(data).toBe('set payment method response');
  });
});
