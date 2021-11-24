<template>
  <ValidationObserver v-slot="{ handleSubmit, reset }">
    <form class="form" @submit.prevent="handleSubmit(submitForm(reset))">
      <ValidationProvider rules="required|email" v-slot="{ errors }" class="form__element">
        <SfInput
          v-e2e="'myaccount-email'"
          v-model="form.email"
          type="email"
          name="email"
          label="Your e-mail"
          required
          :valid="!errors[0]"
          :errorMessage="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider rules="required|password" v-slot="{ errors }" vid="password" class="form__element">
        <SfInput
          v-e2e="'myaccount-password'"
          v-model="form.password"
          type="password"
          name="password"
          label="Password"
          required
          :valid="!errors[0]"
          :errorMessage="errors[0]"
        />
      </ValidationProvider>

      <SfButton
        v-e2e="'myaccount-update-personal-data-btn'"
        class="form__button"
      >
        {{ $t('Update email') }}
      </SfButton>
    </form>
  </ValidationObserver>
</template>

<script>
import { ref } from '@vue/composition-api';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { useUser, userGetters } from '@vue-storefront/vendure';
import { SfInput, SfButton } from '@storefront-ui/vue';

export default {
  name: 'ProfileUpdateForm',
  components: {
    SfInput,
    SfButton,
    ValidationProvider,
    ValidationObserver
  },
  setup(_, { emit }) {
    const { user, load } = useUser();

    const resetForm = () => ({
      email: userGetters.getEmailAddress(user.value),
      password: ''
    });

    const form = ref(resetForm());

    const submitForm = (resetValidationFn) => {
      return () => {
        const onComplete = async () => {
          await load();
          form.value = resetForm();
          resetValidationFn();
        };

        const onError = () => {
          // TODO: Handle error
        };
        emit('submit', { form, onComplete, onError });
      };
    };

    return {
      form,
      submitForm
    };
  }
};
</script>

<style lang='scss' scoped>
.form {
  &__element {
    display: block;
    margin: 0 0 var(--spacer-lg) 0;
  }
  &__button {
    display: block;
    width: 100%;
    @include for-desktop {
      width: 17.5rem;
    }
  }
  &__horizontal {
    @include for-desktop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .form__element {
      @include for-desktop {
        flex: 1;
        margin-right: var(--spacer-2xl);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
