import addToCart from '../../src/api/addToCart';
import defaultMutation from '../../src/api/addToCart/addItemToOrderMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] addToCart', () => {
  it('adds a product to cart (order)', async () => {
    const givenVariables = { productVariantId: '1', quantity: 1};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(defaultMutation);

          return { data: 'add to cart response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await addToCart(context, { productVariantId: '1', quantity: 1});

    const expectedAddToCart = 'add to cart response';

    expect(data).toBe(expectedAddToCart);
  });
});
