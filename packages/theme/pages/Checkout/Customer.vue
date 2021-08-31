<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <SfHeading
      v-e2e="'shipping-heading'"
      :level="3"
      :title="$t('Customer')"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <form @submit.prevent="handleSubmit(handleFormSubmit)">
      <div class="form">
        <ValidationProvider
          name="firstName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'customer-firstName'"
            v-model="form.firstName"
            label="First name"
            name="firstName"
            class="form__element form__element--half"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="lastName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'customer-lastName'"
            v-model="form.lastName"
            label="Last name"
            name="lastName"
            class="form__element form__element--half form__element--half-even"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="emailAddress"
          rules="required|email"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'customer-emailAddress'"
            v-model="form.emailAddress"
            label="Email Address"
            name="emailAddress"
            class="form__element form__element--half"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
      </div>
      <div class="form">
        <div class="form__action">
          <SfButton
            v-e2e="'continue-to-shipping'"
            v-if="!isFormSubmitted"
            class="form__action-button"
            :disabled="!(form.firstName && form.lastName && form.emailAddress)"
            type="submit"
          >
            {{ $t('Continue to shipping') }}
          </SfButton>
        </div>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect
} from '@storefront-ui/vue';
import { ref } from '@vue/composition-api';
import { required, min, digits, email } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { useVSFContext } from '@vue-storefront/core';
import { EMAIL_ADDRESS_CONFLICT_ERROR } from '~/helpers';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('min', {
  ...min,
  message: 'The field should have at least {length} characters'
});
extend('digits', {
  ...digits,
  message: 'Please provide a valid phone number'
});

extend('email', {
  ...email,
  message: 'Invalid email'
});

export default {
  name: 'Customer',
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    ValidationProvider,
    ValidationObserver
  },
  setup (_, { root }) {
    const isFormSubmitted = ref(false);
    const { $vendure } = useVSFContext();
    const errorMessage = ref('');

    const form = ref({
      firstName: '',
      lastName: '',
      emailAddress: ''
    });

    const handleFormSubmit = async () => {
      const response = await $vendure.api.setCustomerForOrder(form.value);
      if (response?.data?.setCustomerForOrder?.errorCode === EMAIL_ADDRESS_CONFLICT_ERROR) {
        errorMessage.value = response?.data?.setCustomerForOrder?.message;
        return;
      }
      root.$router.push(root.localePath({ name: 'shipping' }));
      isFormSubmitted.value = true;
    };

    return {
      isFormSubmitted,
      form,
      handleFormSubmit,
      errorMessage
    };
  }
};
</script>

<style lang="scss" scoped>
.form {
  --button-width: 100%;
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--lg);
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      margin: 0;
      color: var(--c-text);
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    --button-width: auto;
  }
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button {
    &--secondary {
      @include for-desktop {
        order: -1;
        text-align: left;
      }
    }
    &--add-address {
      width: 100%;
      margin: 0;
      @include for-desktop {
        margin: 0 0 var(--spacer-lg) 0;
        width: auto;
      }
    }
  }
  &__back-button {
    margin: var(--spacer-xl) 0 var(--spacer-sm);
    &:hover {
      color:  var(--c-white);
    }
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}

.shipping {
  &__label {
    display: flex;
    justify-content: space-between;
  }
  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}

.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
</style>
