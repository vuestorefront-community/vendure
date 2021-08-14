import { CustomQuery, Context, FactoryParams, UseCategoryErrors, sharedRef, Logger, configureFactoryParams, ComputedProperty, ComposableFunctionArgs } from '@vue-storefront/core';
import { Ref, computed } from '@vue/composition-api';

export interface UseCategoryFactoryParams<
  CATEGORY,
  CATEGORY_SEARCH_PARAMS,
> extends FactoryParams {
  categorySearch: (context: Context, params: CATEGORY_SEARCH_PARAMS & { customQuery?: CustomQuery }) => Promise<CATEGORY>;
}

export interface UseCategory<CATEGORY, CATEGORY_SEARCH_PARAMS> {
  categories: ComputedProperty<CATEGORY>;
  search(params: ComposableFunctionArgs<CATEGORY_SEARCH_PARAMS>): Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseCategoryErrors>;
}

export function useCategoryFactory<CATEGORY, CATEGORY_SEARCH_PARAMS = any>(
  factoryParams: UseCategoryFactoryParams<CATEGORY, CATEGORY_SEARCH_PARAMS>
) {
  return function useCategory(id: string): UseCategory<CATEGORY, CATEGORY_SEARCH_PARAMS> {
    const categories: Ref<CATEGORY> = sharedRef({}, `useCategory-categories-${id}`);
    const loading = sharedRef(false, `useCategory-loading-${id}`);
    const error: Ref<UseCategoryErrors> = sharedRef({
      search: null
    }, `useCategory-error-${id}`);

    const _factoryParams = configureFactoryParams(factoryParams);

    const search = async (searchParams) => {
      Logger.debug(`useCategory/${id}/search`, searchParams);

      try {
        loading.value = true;
        categories.value = await _factoryParams.categorySearch(searchParams);
        error.value.search = null;
      } catch (err) {
        error.value.search = err;
        Logger.error(`useCategory/${id}/search`, err);
      } finally {
        loading.value = false;
      }
    };

    return {
      search,
      loading: computed(() => loading.value),
      categories: computed(() => categories.value),
      error: computed(() => error.value)
    };
  };
}
