import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
// TODO: uncomment later when working with order functionality
// import type { Order } from '@vue-storefront/vendure-api';
import type {
  useUserOrderSearchParams as SearchParams
} from '../../types';

const params: UseUserOrderFactoryParams<any, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (context: Context, params) => {
    console.log('Mocked: searchOrders');
    return {};
  }
};

export const useUserOrder = useUserOrderFactory<any, SearchParams>(params);
