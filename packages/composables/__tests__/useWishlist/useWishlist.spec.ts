/* eslint-disable */

import { useWishlist } from './../../src/composables/useWishlist';
import { mockedAllProductVariants, mockedProductVariant, mockedLocalStorage, mockedWishlist } from '../__mocks__';

jest.mock('@vue-storefront/core', () => ({
  useWishlistFactory: (params) => () => params
}));

// const { addItem: addItemToWishlist, isInWishlist, removeItem: removeItemFromWishlist } = useWishlist();
describe('[vendure-composables] useWishlist', () => {
  beforeAll(() => {
    Object.defineProperty(global, 'localStorage', {
      value: mockedLocalStorage,
    });
  });
  it('loads wishlist', () => {
    // expect(useWishlist.load(context))
  });
  it('adds product to wishlist', () => {
    const { addItem: addItemToWishlist } = useWishlist();
    // expect(addItemToWishlist({product: mockedProductVariant})).toEqual(mockedWishlist);
  });
  it('removes product to wishlist', () => {
    const { removeItem: removeItemFromWishlist } = useWishlist();
    // expect(removeItemFromWishlist({product: mockedProductVariant})).toEqual([]);
  });
  it('it checks that product is in wishlist', () => {
    const {isInWishlist } = useWishlist();
    global.localStorage.setItem('wishlist', JSON.stringify(mockedWishlist))

    // expect(isInWishlist({product: mockedProductVariant})).toBeTruthy()
  });
  it('it checks that product is not in wishlist', () => {
    const { isInWishlist } = useWishlist();
    global.localStorage.setItem('wishlist', JSON.stringify([]))

    // expect(isInWishlist({product: mockedProductVariant})).toBeFalsy()
  });
});
