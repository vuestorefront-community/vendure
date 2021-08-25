import removeFromCart from '../../src/api/removeFromCart';
import removeOrderLineMutation from '../../src/api/removeFromCart/removeOrderLineMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] removeFromCart', () => {
  it('removes product from cart (from order line)', async () => {
    const givenVariables = { orderLineId: '1'};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(removeOrderLineMutation);

          return { data: 'remove from cart response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await removeFromCart(context, { orderLineId: '1'});

    const expectedRemoveFromCart = 'remove from cart response';

    expect(data).toBe(expectedRemoveFromCart);
  });
});
