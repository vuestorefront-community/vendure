import { useProduct } from '../../src//composables/useProduct';
import { mockedProduct } from '../__mocks__';

jest.mock('@vue-storefront/core', () => ({
  useProductFactory: (params) => () => params
}));

const context = {
  $vendure: {
    config: {
      store: ''
    },
    api: {
      getProduct: jest.fn(() => Promise.resolve({ data: { product: mockedProduct }}))
    }
  }
};

describe('[vendure-composables] useProduct', () => {
  it('loads product variants', async () => {
    const { productsSearch } = useProduct('test-product') as any;

    const response = await productsSearch(context, { id: '1' });

    expect(response).toEqual(mockedProduct);
    expect(context.$vendure.api.getProduct).toBeCalledWith({ id: '1' }, undefined);
  });
});
