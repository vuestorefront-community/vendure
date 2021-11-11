import { useRelatedProducts } from '../../src/composables/useRelatedProducts';

const context = {
  $vendure: {
    api: {
      getRelatedProducts: jest.fn(() => ({
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

jest.mock('../../src/factories/', () => ({
  useRelatedProductsFactory: (params) => () => params
}));

describe('[vendure-composables] useRelatedProducts', () => {
  it('triggers related products search', async () => {
    const { load } = useRelatedProducts('test') as any;

    await load(context, {
      input: {
        collectionSlug: 'test',
        groupByProduct: true,
        take: 3
      }
    } as any);

    expect(context.$vendure.api.getRelatedProducts).toBeCalled();
  });
});
