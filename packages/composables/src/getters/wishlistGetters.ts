import {
  WishlistGetters,
  AgnosticAttribute,
  AgnosticPrice,
  AgnosticTotals
} from '@vue-storefront/core';
import type { Wishlist, WishlistItem } from '@vue-storefront/vendure-api';
import { createPrice } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(wishlist: Wishlist): WishlistItem[] {
  if (process.client) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    return wishlist;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(wishlist: Wishlist): AgnosticTotals {
  return process.client
    ? wishlist?.reduce((acc, curr) => ({
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      total: acc?.total + getItemPrice(curr)?.special,
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      subtotal: acc?.subtotal + getItemPrice(curr)?.regular
    }), ({ total: 0, subtotal: 0 }))
    : { total: 0, subtotal: 0 };

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: WishlistItem): string {
  return item?.name || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item: WishlistItem): string {
  return item?.images[0] || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: WishlistItem): AgnosticPrice {
  return {
    regular: createPrice(item?.price?.current),
    special: createPrice(item?.price?.original)
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: WishlistItem): number {
  return 1;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(item: WishlistItem, filters?: string[]): Record<string, AgnosticAttribute | string> {
  return {'': ''};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: WishlistItem): string {
  return item?.sku || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(wishlist: Wishlist): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems(wishlist: Wishlist): number {
  return wishlist?.length;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

export const wishlistGetters: WishlistGetters<Wishlist, WishlistItem> = {
  getItems,
  getTotals,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getShippingPrice,
  getItemSku,
  getTotalItems,
  getFormattedPrice
};
