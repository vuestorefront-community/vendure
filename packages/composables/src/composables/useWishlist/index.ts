/* istanbul ignore file */
import {
  Context,
  useWishlistFactory,
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import type { Wishlist, WishlistItem } from '@vue-storefront/vendure-api';
import type { AgnosticProductVariant } from '../../types';
import { getWishlist, setWishlist } from '../../helpers';

const params: UseWishlistFactoryParams<Wishlist, WishlistItem, AgnosticProductVariant> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    if (process.client) {
      return getWishlist() || [];
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { product }) => {
    const wishlist = getWishlist();
    wishlist?.push(product);
    setWishlist(wishlist);
    return wishlist;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { product }) => {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.sku !== product.sku);
    setWishlist(updatedWishlist);
    return updatedWishlist;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentWishlist }) => {
    if (process.client) {
      setWishlist([]);
    }
    return [];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context: Context, { product }) => {
    const wishlist = process.client ? getWishlist() : [];
    return Boolean(wishlist?.find((wishlistItem): boolean => {

      const equalSku = wishlistItem?.sku === product?.sku;
      const equalId = wishlistItem?._id === product?._id;
      const equalVariantId = wishlistItem?._variantId === product?._variantId;
      return Boolean(equalSku && equalId && equalVariantId);
    }));
  }
};

export const useWishlist = useWishlistFactory<Wishlist, WishlistItem, AgnosticProductVariant>(params);
