import { useFacet } from '../../src//composables/useFacet';

const context = {
  $vendure: {
    api: {
      getFacet: jest.fn(() => ({
        data: {
          collections: [],
          totalItems: 10,
          items: [],
          facetValues: []
        }
      }))
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useFacetFactory: (factoryParams) => () => {

    return {
      search: factoryParams.search
    };
  }
}));

describe('[vendure-composables] useFacet', () => {
  it('triggers faceting search', async () => {
    const { search } = useFacet() as any;

    await search(context, {
      input: {
        collectionSlug: 'test',
        groupByProduct: true,
        take: 3
      }
    } as any);

    expect(context.$vendure.api.getFacet).toBeCalled();
  });
});
