import {
  Context,
  useMakeOrderFactory,
  UseMakeOrderFactoryParams
} from '@vue-storefront/core';
// TODO: replace any with Order when working on order functionality
// import type { Order } from '@vue-storefront/vendure-api';

const factoryParams: UseMakeOrderFactoryParams<any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  make: async (context: Context, { customQuery }) => {
    console.log('Mocked: useMakeOrder.make');
    return {};
  }
};

export const useMakeOrder = useMakeOrderFactory<any>(factoryParams);
