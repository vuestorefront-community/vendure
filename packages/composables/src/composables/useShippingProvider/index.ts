import { useShippingProviderFactory, UseShippingProviderParams, Context } from '@vue-storefront/core';
import type { ShippingProvider, ShippingMethod } from '@vue-storefront/vendure-api';

const params: UseShippingProviderParams<ShippingProvider, ShippingMethod> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const response = await context.$vendure.api.getShippingMethods(customQuery);

    return response?.data?.eligibleShippingMethods;
  },

  // Not used as Vendure provides a mutation that we are triggering from the theme via setShippingMethod API Client function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingMethod, customQuery }) => {
    console.log('Mocked: saveShippingProvider');
    return {};
  }
};

export const useShippingProvider = useShippingProviderFactory<ShippingProvider, ShippingMethod>(params);
