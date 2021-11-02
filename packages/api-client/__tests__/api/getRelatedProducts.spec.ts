import getRelatedProducts from '../../src/api/getRelatedProducts';
import defaultQuery from '../../src/api/getRelatedProducts/getRelatedProductsQuery';
import { Context } from '../../src/types';

describe('[vendure-api-client] getRelatedProducts', () => {
  it('fetches related products for the current product', async () => {
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

    const { data } = await getRelatedProducts(context, {});

    const expectedGetFacet = 'facet response';

    expect(data).toBe(expectedGetFacet);
  });
});
