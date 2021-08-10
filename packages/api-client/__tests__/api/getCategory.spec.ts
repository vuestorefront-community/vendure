import getCategory from '../../src/api/getCategory';
import defaultQuery from '../../src/api/getCategory/defaultQuery';
import { Config } from '../../src/types';

describe('[vendure-api-client] getCategory', () => {
  it('fetches categories (collections)', async () => {
    const givenVariables = {
      options: {}
    };

    const context = {
      config: {} as Config,
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'category response' };
        }
      },
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getCategory(context, { options: {}});

    expect(data).toBe('category response');
  });
});
