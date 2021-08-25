import getProduct from '../../src/api/getProduct';
import defaultQuery from '../../src/api/getProduct/productQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getProduct', () => {
  it('fetches product by id and/or slug', async () => {
    const givenVariables = {
      id: '1',
      slug: 'laptop'
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'product response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getProduct(context, { id: '1', slug: 'laptop' });

    const expectedGetProduct = 'product response';

    expect(data).toBe(expectedGetProduct);
  });
});
