# `usePayment`

## Features

`usePayment` composable is responsible for:

* fetching payment methods
* setting payment method for an order

::: warning
This composable is not a part of standard Vue Storefront composables and was made excusively for Vendure integration to handle payment for checkout process.
:::

## API

- `set` - method used to set payment method for an active order

  - `params: PaymentInput & { customQuery?: CustomQuery }`

```ts
type CustomQuery = {
  addPaymentToOrder: string
}
```

<https://www.vendure.io/docs/graphql-api/shop/input-types/#paymentinput>

- `load` - method used to load eliglible payment methods

  - `params: { customQuery?: CustomQuery }`

```ts
type CustomQuery = {
  eligiblePaymentMethods: string
}
```

- `methods: PaymentMethodQuote[]` - array containing payment methods fetched by `load` method.

<https://www.vendure.io/docs/graphql-api/admin/object-types/#paymentmethodquote>

- `loading: boolean` - a reactive object containing information about loading state of your `set` or `load` methods.

- `error: UseCategoryErrors` - reactive object containing the error message, if `set` or `load` failed for any reason.

```ts
interface UsePaymentErrors {
  set: Error;
  load: Error;
}
```

## Getters

We do not provide getters for checkout and its parts.

## Example

```js
// Payment.vue component

import { usePayment } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core'

export default {
  setup () {
    const { load, set, methods } = usePayment();

    onSSR(async () => {
      await load();
    });

    const setPaymentMethod = () => {
      const selectedMethod = await set({ method: 'test', metadata: {} })

      return selectedMethod?.code
    }

    return {
      methods,
      setPaymentMethod
    }
  }
}
```
