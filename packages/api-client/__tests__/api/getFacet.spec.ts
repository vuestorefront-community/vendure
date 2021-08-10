import getFacet from '../../src/api/getFacet';
import defaultQuery from '../../src/api/getFacet/defaultQuery';
import { Config } from '../../src/types';

describe('[vendure-api-client] getFacet', () => {
  it('fetches products, collections, and facets for the current query', async () => {
    const givenVariables = {
      input: {}
    };

    const context = {
      config: {} as Config,
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'facet response' };
        }
      },
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getFacet(context, { input: {}});

    expect(data).toBe('facet response');
  });
});
