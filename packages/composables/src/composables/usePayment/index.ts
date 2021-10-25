import { Context, CustomQuery } from '@vue-storefront/core';
import { PaymentMethodQuote } from '@vue-storefront/vendure-api';
import { UsePayment, usePaymentFactory, UsePaymentFactoryParams } from '../../factories';

const usePaymentFactoryParams: UsePaymentFactoryParams<PaymentMethodQuote[]> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  set: async (context: Context, { method, metadata, customQuery }) => {
    const response = await context.$vendure.api.setPaymentMethod({ method, metadata }, customQuery);

    return response?.data?.addPaymentToOrder;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params: { customQuery?: CustomQuery }): Promise<PaymentMethodQuote[]> => {
    const response = await context.$vendure.api.getPaymentMethods(params?.customQuery);

    return response?.data?.eligiblePaymentMethods;
  }
};

const usePayment: () => UsePayment<PaymentMethodQuote[]> = usePaymentFactory<PaymentMethodQuote[]>(usePaymentFactoryParams);

export {
  usePayment,
  usePaymentFactoryParams
};
