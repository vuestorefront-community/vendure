import getCategory from '../../src/api/getCategory';
import defaultQuery from '../../src/api/getCategory/collectionsQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getCategory', () => {
  it('fetches categories (collections)', async () => {
    const givenVariables = {
      options: {}
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'category response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getCategory(context, { options: {}});

    const expectedGetCategory = 'category response';

    expect(data).toBe(expectedGetCategory);
  });
});
