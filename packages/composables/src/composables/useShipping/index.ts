import {
  Context,
  useShippingFactory,
  UseShippingParams
} from '@vue-storefront/core';
import type { CreateAddressInput, Order, OrderAddress } from '@vue-storefront/vendure-api';
import type {
  UseShippingAddParams as AddParams
} from '../../types';
import { useCart } from '../useCart';

const params: UseShippingParams<OrderAddress, AddParams> = {
  provide() {
    return {
      cart: useCart()
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    if (!context.cart?.cart?.value?.shippingAddress) {
      await context.cart.load({ customQuery });
    }
    return context.cart.cart.value.shippingAddress;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingDetails, customQuery }) => {
    const response = await context.$vendure.api.updateAddressDetails({ input: shippingDetails as CreateAddressInput }, customQuery);

    return (response?.data?.setOrderShippingAddress as Order)?.shippingAddress;
  }
};

export const useShipping = useShippingFactory<OrderAddress, AddParams>(params);
