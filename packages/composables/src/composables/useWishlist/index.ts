/* istanbul ignore file */
import {
  Context,
  useWishlistFactory,
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import type { Wishlist, WishlistItem } from '@vue-storefront/vendure-api';
import type { AgnosticProductVariant } from '../../types';

const params: UseWishlistFactoryParams<Wishlist, WishlistItem, AgnosticProductVariant> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    if (process.client) {
      return JSON.parse(localStorage.getItem('wishlist')) || [];
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { product }) => {
    if (!localStorage.getItem('wishlist') || localStorage.getItem('wishlist') === '1') {
      localStorage.setItem('wishlist', JSON.stringify([]));
    }
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    wishlist?.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    return wishlist;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { product }) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.sku !== product.sku);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    return updatedWishlist;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentWishlist }) => {
    if (process.client) {
      localStorage.setItem('wishlist', '[]');
    }
    return [];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context: Context, { product }) => {
    const wishlist = process.client ? JSON.parse(localStorage.getItem('wishlist')) : [];
    return Boolean(wishlist?.find((wishlistItem): boolean => {

      const equalSku = wishlistItem?.sku === product?.sku;
      const equalId = wishlistItem?._id === product?._id;
      const equalVariantId = wishlistItem?._variantId === product?._variantId;
      return Boolean(equalSku && equalId && equalVariantId);
    }));
  }
};

export const useWishlist = useWishlistFactory<Wishlist, WishlistItem, AgnosticProductVariant>(params);
