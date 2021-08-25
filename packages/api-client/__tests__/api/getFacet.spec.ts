import getFacet from '../../src/api/getFacet';
import defaultQuery from '../../src/api/getFacet/searchQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getFacet', () => {
  it('fetches products, collections, and facets for the current query', async () => {
    const givenVariables = {};

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);

          return { data: 'facet response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await getFacet(context, {});

    const expectedGetFacet = 'facet response';

    expect(data).toBe(expectedGetFacet);
  });
});
