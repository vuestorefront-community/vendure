import {
  Context,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';
import type {
  Cart,
  CartItem,
  Coupon,
  UpdateOrderItemsResult
} from '@vue-storefront/vendure-api';
import { AgnosticProductVariant } from '../../types';

const params: UseCartFactoryParams<Cart, CartItem, AgnosticProductVariant, Coupon> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: useCart.load');
    return {};
  },

  // TODO: update to use currentCart
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { product, quantity, customQuery }): Promise<UpdateOrderItemsResult> => {
    const response = await context.$vendure.api.addToCart({ productVariantId: product._id, quantity }, customQuery);

    return response?.data?.addItemToOrder;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentCart, product, customQuery }) => {
    console.log('Mocked: useCart.removeItem');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    console.log('Mocked: useCart.updateItemQty');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    console.log('Mocked: useCart.clear');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    console.log('Mocked: useCart.applyCoupon');
    return {
      updatedCart: {},
      updatedCoupon: {}
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context: Context, { currentCart, coupon, customQuery }) => {
    console.log('Mocked: useCart.removeCoupon');
    return {
      updatedCart: {}
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    console.log('Mocked: useCart.isInCart');
    return false;
  }
};

export const useCart = useCartFactory<Cart, CartItem, AgnosticProductVariant, Coupon>(params);
