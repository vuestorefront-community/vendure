/* eslint-disable */

import { useWishlist } from './../../src/composables/useWishlist';
import { mockedProductVariant, LocalStorageMock, mockedWishlist } from '../__mocks__';

const context = {};

jest.mock('@vue-storefront/core', () => ({
  useWishlistFactory: (params) => () => params
}));

describe('[vendure-composables] useWishlist', () => {
  beforeAll(() => {
    global.localStorage = new LocalStorageMock();
  });
  it('loads wishlist', async () => {
    const { load } = useWishlist() as any;

    const response = await load(context);
    expect(response).toEqual(undefined);
  });
  it('adds product to wishlist', async () => {
    const { addItem } = useWishlist() as any;

    const response = await addItem(context, {product: mockedProductVariant});
    expect(response).toEqual(mockedWishlist);
  });
  it('removes product to wishlist', async () => {
    const { removeItem } = useWishlist() as any;

    const response = await removeItem(context, {product: mockedProductVariant});
    expect(response).toEqual([]);
  });
});
