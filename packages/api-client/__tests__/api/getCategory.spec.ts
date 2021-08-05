import getCategory from '../../src/api/getCategory';
import defaultQuery from '../../src/api/getCategory/defaultQuery';
import { Config } from '../../src/types';

describe('[vendure-api-client] getCategory', () => {
  it('fetches categories (collections)', async () => {
    const givenVariables = {
      id: '1'
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

          return { data: 'category response' };
        }
      },
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getCategory(context, { id: '1' });

    expect(data).toBe('category response');
  });
});
