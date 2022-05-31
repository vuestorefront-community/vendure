
import { mockedProduct } from '../__mocks__';
import { useProducts } from '../../src/composables/useProducts';

jest.mock('@vue-storefront/core', () => ({
  useProductFactory: (params) => () => params
}));

const context = {
  $vendure: {
    config: {
      store: ''
    },
    api: {
      getProducts: jest.fn(() => Promise.resolve({ data: { products: [mockedProduct] }}))
    }
  }
};

describe('[vendure-composables] useProduct', () => {
  it('loads product variants', async () => {
    const products = await useProducts(context, {}) as any;

    expect(products).toEqual([mockedProduct]);
    expect(context.$vendure.api.getProducts).toBeCalledWith({ }, undefined);
  });
});
