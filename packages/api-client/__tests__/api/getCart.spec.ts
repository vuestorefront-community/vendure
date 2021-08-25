import getCart from '../../src/api/getCart';
import activeOrderQuery from '../../src/api/getCart/activeOrderQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getCart', () => {
  it('fetches current cart (active order)', async () => {
    const givenVariables = {};

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(activeOrderQuery);

          return { data: 'get cart response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getCart(context, {});

    const expectedGetCartResponse = 'get cart response';

    expect(data).toBe(expectedGetCartResponse);
  });
});
