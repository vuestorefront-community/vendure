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
import { useUser } from '../useUser';

const params: UseUserOrderFactoryParams<any, SearchParams> = {
  provide() {
    return {
      user: useUser()
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (context: Context, params) => {
    return context.user?.user?.value?.orders;
  }
};

export const useUserOrder = useUserOrderFactory<any, SearchParams>(params);
