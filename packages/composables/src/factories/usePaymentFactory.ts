import { CustomQuery, Context, FactoryParams, sharedRef, Logger, configureFactoryParams, ComputedProperty } from '@vue-storefront/core';
import { PaymentInput } from '@vue-storefront/vendure-api';
import { Ref, computed } from '@vue/composition-api';
import { Error, Order } from '../types';

export interface UsePaymentErrors {
  set: Error;
  load: Error;
}

export interface UsePaymentFactoryParams<PAYMENT> extends FactoryParams {
  set: (context: Context, params: PaymentInput & { customQuery?: CustomQuery }) => Promise<Order>;
  load: (context: Context, params?: { customQuery?: CustomQuery }) => Promise<PAYMENT>;
}

export interface UsePayment<PAYMENT> {
  methods: ComputedProperty<PAYMENT>;
  set(params: PaymentInput & { customQuery?: CustomQuery }): Promise<void>;
  load(params?: { customQuery?: CustomQuery }): Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UsePaymentErrors>;
}

export function usePaymentFactory<PAYMENT = any>(
  factoryParams: UsePaymentFactoryParams<PAYMENT>
) {
  return function usePayment(): UsePayment<PAYMENT> {
    const methods: Ref<PAYMENT> = sharedRef([], 'usePayment-methods');
    const loading = sharedRef(false, 'usePayment-loading');
    const error: Ref<UsePaymentErrors> = sharedRef({
      set: null,
      load: null
    }, 'usePayment-error');

    const _factoryParams = configureFactoryParams(factoryParams);

    const load = async (searchParams?) => {
      Logger.debug('usePayment/load', searchParams);

      try {
        loading.value = true;
        methods.value = await _factoryParams.load(searchParams);
        error.value.load = null;
      } catch (err) {
        error.value.load = err;
        Logger.error('usePayment/load', err);
      } finally {
        loading.value = false;
      }
    };

    const set = async (searchParams) => {
      Logger.debug('usePayment/set', searchParams);

      try {
        loading.value = true;
        const selectedMethod = await _factoryParams.set(searchParams);
        error.value.set = null;
        return selectedMethod;
      } catch (err) {
        error.value.set = err;
        Logger.error('usePayment/set', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      set,
      load,
      loading: computed(() => loading.value),
      methods: computed(() => methods.value),
      error: computed(() => error.value)
    };
  };
}
