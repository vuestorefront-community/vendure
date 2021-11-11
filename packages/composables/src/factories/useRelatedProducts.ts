import {
  CustomQuery,
  Context,
  FactoryParams,
  sharedRef,
  Logger,
  configureFactoryParams,
  ComputedProperty
} from '@vue-storefront/core';
import { Ref, computed } from '@vue/composition-api';
import { Error } from '../types';

export interface UseRelatedProductsErrors {
  set: Error;
  load: Error;
}

export interface UseRelatedProductsFactoryParams<RELATED_PRODUCTS> extends FactoryParams {
  load: (
    context: Context,
    params?: { customQuery?: CustomQuery }
  ) => Promise<RELATED_PRODUCTS>;
}

export interface UseRelatedProducts<RELATED_PRODUCTS> {
  relatedProducts: ComputedProperty<RELATED_PRODUCTS>;
  load(params?: { customQuery?: CustomQuery }): Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseRelatedProductsErrors>;
}

export function useRelatedProductsFactory<RELATED_PRODUCTS = any>(
  factoryParams: UseRelatedProductsFactoryParams<RELATED_PRODUCTS>
) {
  return function useRelatedProducts(): UseRelatedProducts<RELATED_PRODUCTS> {
    const relatedProducts: Ref<RELATED_PRODUCTS> = sharedRef(
      [],
      'useRelatedProducts-methods'
    );
    const loading = sharedRef(false, 'useRelatedProducts-loading');
    const error: Ref<UseRelatedProductsErrors> = sharedRef(
      {
        load: null
      },
      'useRelatedProducts-error'
    );

    const _factoryParams = configureFactoryParams(factoryParams);

    const load = async (searchParams?) => {
      Logger.debug('useRelatedProducts/load', searchParams);

      try {
        loading.value = true;
        relatedProducts.value = await _factoryParams.load(searchParams);
        error.value.load = null;
      } catch (err) {
        error.value.load = err;
        Logger.error('useRelatedProducts/load', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      load,
      loading: computed(() => loading.value),
      relatedProducts: computed(() => relatedProducts.value),
      error: computed(() => error.value)
    };
  };
}
