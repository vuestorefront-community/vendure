import {
  Context,
  useBillingFactory,
  UseBillingParams
} from '@vue-storefront/core';
import type { CreateAddressInput, Order, OrderAddress } from '@vue-storefront/vendure-api';
import { BILLING_TYPE } from '../../helpers';
import type {
  UseBillingAddParams as AddParams
} from '../../types';
import { useCart } from '../useCart';

const params: UseBillingParams<OrderAddress, AddParams> = {
  provide() {
    return {
      cart: useCart()
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    if (!context.cart?.cart?.value?.billingAddress) {
      await context.cart.load({ customQuery });
    }
    return context.cart.cart.value.billingAddress;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { params, billingDetails, customQuery }) => {
    // OrderAddress has one property optional which is required in CreateAddressInput.
    const response = await context.$vendure.api.updateAddressDetails({ input: billingDetails as CreateAddressInput, type: BILLING_TYPE }, customQuery);

    return (response?.data?.setOrderBillingAddress as Order)?.billingAddress;
  }
};

export const useBilling = useBillingFactory<OrderAddress, AddParams>(params);
