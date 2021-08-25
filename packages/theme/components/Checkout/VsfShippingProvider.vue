<template>
  <div class="shipping-provider">
    <SfHeading
      :level="3"
      :title="$t('Shipping method')"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <SfLoader :loading="loadingShippingProvider">
        <div v-if="errorShippingProvider.save">
          {{ $t('There was some error while trying to select this shipping method. We are sorry, please try with different shipping method or later.') }}
        </div>
        <div v-else-if="!hasShippingMethods">
          {{ $t('There are no shipping methods available for this country. We are sorry, please try with different country or later.') }}
        </div>
      </SfLoader>
      <div class="form__radio-group">
          <SfRadio
            v-e2e="'shipping-method-label'"
            v-for="method in state"
            :key="method.id"
            :label="method.name"
            :value="method.id"
            :selected="selectedShippingMethod && selectedShippingMethod.id"
            @input="selectShippingMethod(method)"
            name="shippingMethod"
            :description="method.localizedDescription"
            class="form__radio shipping"
          >
            <template #label="{ label }">
              <div class="sf-radio__label shipping__label">
                <div>{{ label }}</div>
                <div v-if="method && method.priceWithTax">{{ $n(getCalculatedPrice(method.priceWithTax), 'currency') }}</div>
              </div>
            </template>
            <template #description="{ localizedDescription }">
              <div class="sf-radio__description shipping__description">
                <div class="shipping__info">
                  {{ localizedDescription }}
                </div>
              </div>
            </template>
          </SfRadio>
        </div>
    </div>
  </div>
</template>

<script>
import { useCart, useShippingProvider, cartGetters } from '@vue-storefront/vendure';
import {
  SfHeading,
  SfButton,
  SfRadio,
  SfLoader
} from '@storefront-ui/vue';
import { ref, reactive, onMounted, computed } from '@vue/composition-api';
import { getCalculatedPrice } from '~/helpers';
import { useVSFContext } from '@vue-storefront/core';

export default {
  name: 'VsfShippingProvider',
  components: {
    SfHeading,
    SfButton,
    SfRadio,
    SfLoader
  },
  props: {
    beforeLoad: {
      type: Function,
      default: config => config
    },
    afterLoad: {
      type: Function,
      default: shippingMethodsResponse => shippingMethodsResponse
    },
    beforeSelect: {
      type: Function,
      default: shippingMethod => shippingMethod
    },
    afterSelect: {
      type: Function,
      // eslint-disable-next-line
      default: selectedShippingMethod => {}
    },
    beforeSelectedDetailsChange: {
      type: Function,
      default: () => {}
    },
    afterSelectedDetailsChange: {
      type: Function,
      default: () => {}
    },
    onError: {
      type: Function,
      // eslint-disable-next-line
      default: ({ action, error }) => {}
    }
  },
  setup (props, { emit }) {
    const shippingMethods = ref([]);
    const { $vendure } = useVSFContext();
    const { cart, setCart } = useCart();
    const {
      state,
      load,
      error: errorShippingProvider,
      loading: loadingShippingProvider
    } = useShippingProvider();
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const selectedShippingMethod = ref(null);

    const error = reactive({
      loadMethods: null
    });

    const selectShippingMethod = async shippingMethod => {
      const newOrder = await $vendure.api.setShippingMethod({ shippingMethodId: shippingMethod.id });
      setCart(newOrder.data.setOrderShippingMethod);
      selectedShippingMethod.value = shippingMethod;
      emit('shippingMethodSelected', shippingMethod);
    };

    const hasShippingMethods = computed(() => state?.value?.length);

    onMounted(async () => {
      await props.beforeLoad();
      await load();
    });

    return {
      shippingMethods,
      hasShippingMethods,
      getCalculatedPrice,
      selectedShippingMethod,
      selectShippingMethod,
      totals,
      error,
      errorShippingProvider,
      loadingShippingProvider,
      state
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
  --heading-title-font-weight: var(--font-weight--bold);
}

.shipping-provider {
  .sf-radio {
    &__label {
      display: flex;
      justify-content: space-between;
    }
    &__description {
      --radio-description-margin: 0;
      --radio-description-font-size: var(--font-xs);
    }
  }
}

.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: 25rem;
    }
  }
  &__radio-group {
    flex: 0 0 100%;
    margin: 0 0 var(--spacer-xl) 0;
    @include for-desktop {
      margin: 0 0 var(--spacer-2xl) 0;
    }

  }
}
</style>
