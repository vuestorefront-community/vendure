import getProducts from '../../src/api/getProducts';
import defaultQuery from '../../src/api/getProducts/productsQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getProducts', () => {
  it('fetches product list', async () => {
    const givenVariables = {
      // TODO
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'products response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getProducts(context, { /* TODO */ });

    const expectedGetProduct = 'products response';

    expect(data).toBe(expectedGetProduct);
  });
});
