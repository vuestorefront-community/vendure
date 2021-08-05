import getProduct from '../../src/api/getProduct';
import defaultQuery from '../../src/api/getProduct/defaultQuery';
import { Config } from '../../src/types';

describe('[vendure-api-client] getProduct', () => {
  it('fetches product by id and/or slug', async () => {
    const givenVariables = {
      id: '1',
      slug: 'laptop'
    };

    const context = {
      config: {
        api: {
          uri: 'http://localhost:3000/shop-api',
          tokenMethod: 'cookie'
        },
        currency: 'USD',
        lang: 'en'
      } as Config,
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'product response' };
        }
      },
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getProduct(context, { id: '1', slug: 'laptop' });

    expect(data).toBe('product response');
  });
});
