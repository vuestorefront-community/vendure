import updateCartQuantity from '../../src/api/updateCartQuantity';
import adjustOrderLineMutation from '../../src/api/updateCartQuantity/adjustOrderLineMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] updateCartQuantity', () => {
  it('updates quantity of a product in cart (order line)', async () => {
    const givenVariables = { orderLineId: '1', quantity: 1};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(adjustOrderLineMutation);

          return { data: 'update cart quantity response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await updateCartQuantity(context, { orderLineId: '1', quantity: 1});

    const expectedUpdateCartQuantity = 'update cart quantity response';

    expect(data).toBe(expectedUpdateCartQuantity);
  });
});
