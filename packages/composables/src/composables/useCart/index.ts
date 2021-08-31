import {
  Context,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';
import type {
  Coupon,
  Order,
  OrderLine
} from '@vue-storefront/vendure-api';
import { AgnosticProductVariant } from '../../types';

// Return types from Vendure mutations on Cart (Order) are unions of Order and something else (i.e. OrderModificationError).
// When we return this union type, TypeScript complains that there are no properties in common with order as it returns only __typename.
// So, in all mutations we have a return type of Promise<Order> and we are also casting the output i.e:
// return response?.data?.X as Order

const params: UseCartFactoryParams<Order, OrderLine, AgnosticProductVariant, Coupon> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }): Promise<Order> => {
    const response = await context.$vendure.api.getCart(customQuery);

    return response?.data?.activeOrder;
  },

  // TODO: update to use currentCart
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentCart, product, quantity, customQuery }): Promise<Order> => {
    const productVariantId = product?._variantId || product?._id;
    const response = await context.$vendure.api.addToCart({ productVariantId, quantity }, customQuery);

    return response?.data?.addItemToOrder as Order;
  },

  // TODO: update to use currentCart
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentCart, product, customQuery }): Promise<Order> => {
    const response = await context.$vendure.api.removeFromCart({ orderLineId: product.id}, customQuery);

    return response?.data?.removeOrderLine as Order;
  },

  // TODO: update to use currentCart
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context: Context, { currentCart, product, quantity, customQuery }): Promise<Order> => {
    const response = await context.$vendure.api.updateCartQuantity({ orderLineId: product.id, quantity }, customQuery);

    return response?.data?.adjustOrderLine as Order;
  },

  // Not used in VSF for now
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }): Promise<Order> => {
    console.log('Mocked: useCart.clear');
    return Promise.resolve({}) as Promise<Order>;
  },

  // TODO: update to use currentCart
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    const response = await context.$vendure.api.applyCartCoupon({ couponCode }, customQuery);

    return {
      updatedCart: response?.data?.applyCouponCode as Order,
      updatedCoupon: couponCode
    };
  },

  // FIXME: later change the coupon property to couponCode to work similarly to applyCoupon method
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context: Context, { coupon, customQuery }) => {
    const response = await context.$vendure.api.removeCartCoupon({ couponCode: coupon }, customQuery);

    return {
      updatedCart: response?.data?.removeCouponCode
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    return Boolean(currentCart?.lines?.find(orderLine => orderLine?.productVariant?.id === product._id || orderLine?.productVariant?.id === product._variantId));
  }
};

export const useCart = useCartFactory<Order, OrderLine, AgnosticProductVariant, Coupon>(params);
