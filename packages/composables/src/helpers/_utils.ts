import { Wishlist } from '@vue-storefront/vendure-api';

export const createPrice = (price: number): number => {
  return price ? price / 100 : 0;
};
export const setWishlist = (wishlist: Wishlist): string => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  return '';
};
export const getWishlist = (): Wishlist => {
  if (!localStorage.getItem('wishlist') || localStorage.getItem('wishlist') === '1') {
    setWishlist([]);
  }
  return JSON.parse(localStorage.getItem('wishlist'));
};
