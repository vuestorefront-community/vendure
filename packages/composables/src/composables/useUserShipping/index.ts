import {
  Context,
  useUserShippingFactory,
  UseUserShippingFactoryParams
} from '@vue-storefront/core';
import type { CreateAddressInput, DeleteCustomerAddress, Success, UpdateAddressInput } from '@vue-storefront/vendure-api';
import { useUser } from '../useUser';
import type {
  UserBillingAddress as Address,
  UserBillingAddressItem as AddressItem
} from '@vue-storefront/vendure-api';

const params: UseUserShippingFactoryParams<Address, AddressItem> = {
  provide() {
    return {
      user: useUser()
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAddress: async (context: Context, params): Promise<Address> => {
    console.log('Mocked: useUserShipping.addAddress', params);
    const shippingAddress: CreateAddressInput = {
      ...params?.address,
    } as CreateAddressInput
    
    const result = await context.$vendure.api.createCustomerAddress(shippingAddress, params?.customQuery);

    return result?.data?.createCustomerAddress;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, params): Promise<Success> => {
    console.log('Mocked: useUserShipping.deleteAddress', params);

    const result = await context.$vendure.api.deleteCustomerAddress(params?.address, params?.customQuery);
    return result?.data?.deleteCustomerAddress;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params): Promise<Address> => {
    console.log('Mocked: useUserShipping.updateAddress', params);

    const shippingAddress: UpdateAddressInput = {
      ...params?.address,
    } as UpdateAddressInput

    const result = await context.$vendure.api.updateCustomerAddress(shippingAddress, params?.customQuery);

    return result?.data?.updateCustomerAddress;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    return context.user?.user?.value?.addresses;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.setDefaultAddress');
    return {};
  }
};

export const useUserShipping = useUserShippingFactory<Address, AddressItem>(params);
