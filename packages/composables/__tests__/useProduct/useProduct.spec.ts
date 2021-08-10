import { useProduct } from '../../src/useProduct';

const product = (id) => ([{
  _id: id,
  _description: 'cool laptop',
  _categoriesRef: ['1', '2', '3'],
  name: 'Laptop',
  sku: '123',
  slug: 'laptop',
  images: [{}],
  price: {
    original: 1,
    current: 2
  },
  collections: [
    {
      id: '1',
      name: 'laptop'
    },
    {
      id: '2',
      name: 'mouse'
    },
    {
      id: '3',
      name: 'keyboard'
    }
  ],
  optionGroups: ['1', '2', '3'],
  featuredAsset: {},
  assets: ['1', '2', '3']
}]);

const productResponse = {
  data: {
    product: {
      variants: [
        {
          id: '1',
          name: 'Laptop',
          sku: '123',
          slug: 'laptop',
          priceWithTax: 2,
          price: 1
        }
      ],
      slug: 'laptop',
      description: 'cool laptop',
      collections: [
        {
          id: '1',
          name: 'laptop'
        },
        {
          id: '2',
          name: 'mouse'
        },
        {
          id: '3',
          name: 'keyboard'
        }
      ],
      optionGroups: ['1', '2', '3'],
      featuredAsset: {},
      assets: ['1', '2', '3']
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useProductFactory: (params) => () => params
}));

const context = {
  $vendure: {
    config: {
      store: ''
    },
    api: {
      getProduct: jest.fn(() => Promise.resolve(productResponse))
    }
  }
};

describe('[vendure-composables] useProduct', () => {
  it('loads product variants', async () => {
    const { productsSearch } = useProduct('test-product') as any;

    const response = await productsSearch(context, { id: '1' });

    expect(response).toEqual(product('1'));
    expect(context.$vendure.api.getProduct).toBeCalledWith({ id: '1' }, undefined);
  });
});
