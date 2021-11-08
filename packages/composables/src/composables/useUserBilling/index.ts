import {
  Context,
  useUserBillingFactory,
  UseUserBillingFactoryParams
} from '@vue-storefront/core';
import type {
  CreateAddressInput,
  UpdateAddressInput,
  UserBillingAddress as Address,
  UserBillingAddressItem as AddressItem
} from '@vue-storefront/vendure-api';
import { useUser } from '../useUser';

const params: UseUserBillingFactoryParams<Address, AddressItem> = {
  provide() {
    return {
      user: useUser()
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAddress: async (context: Context, params) => {
    const billingAddress: CreateAddressInput = {
      ...params?.address
    } as CreateAddressInput;

    await context.$vendure.api.createCustomerAddress(billingAddress, params?.customQuery);

    const user = await context.$vendure.api.getActiveCustomer();

    return user?.data?.activeCustomer?.addresses;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, params) => {
    await context.$vendure.api.deleteCustomerAddress(params?.address, params?.customQuery);
    const user = await context.$vendure.api.getActiveCustomer();

    return user?.data?.activeCustomer?.addresses;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params) => {
    const billingAddress: UpdateAddressInput = {
      ...params?.address
    } as UpdateAddressInput;

    await context.$vendure.api.updateCustomerAddress(billingAddress, params?.customQuery);
    const user = await context.$vendure.api.getActiveCustomer();

    return user?.data?.activeCustomer?.addresses;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    return context.user?.user?.value?.addresses;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.setDefaultAddress');
    return {};
  }
};

export const useUserBilling = useUserBillingFactory<Address, AddressItem>(params);
