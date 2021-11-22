# `useForgotPassword`

## Features

`useForgotPassword` composable is responsible for sending request for sending reset email, generate token and than set new password.

## API

- `resetPassword` - function for request to send an email containing link to reset the password site
  - params: `{ email, currentResult, customQuery }`

```ts
type RequestPasswordResetParams = {
  emailAddress: string;
};
```

- `setNewPassword` - sends token and new password to set it
  - params: `{ tokenValue, newPassword, currentResult, customQuery }`

```ts
type ResetPasswordParams = {
  tokenValue: string,
  newPassword: string,
};
```

## Getters

- `isPasswordChanged` - returns boolean if the password was succesfully changed or not

- `getResetPasswordToken` - as it's not necessary to fetch token this getter is not used in Vendure implementation

```ts
interface ForgotPasswordGetters<FORGOT_PASSWORD_RESULT> {
  getResetPasswordToken: (result: FORGOT_PASSWORD_RESULT) => string;
  isPasswordChanged: (result: FORGOT_PASSWORD_RESULT) => boolean;
}
```

## Examples

```js
// request reset password 
<template>
  <form @submit="handleForgotten">
    <SfInput
      v-model="userEmail"
    />
    <SfButton
      type="submit"
    >
      <div>{{ $t('Reset Password') }}</div>
    </SfButton>
  </form>
</template>
import { useProduct, productGetters } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core'
import { computed } from '@vue/composition-api';

export default {  
  setup () {
    const form = ref({});
    const { request, error: forgotPasswordError, loading: forgotPasswordLoading } = useForgotPassword();

    const handleForgotten = async () => {
      await request({ email: form.value.userEmail });
    };

    return {
      forgotPasswordError,
      forgotPasswordLoading,
      handleForgotten,
    }
  }
}
```
