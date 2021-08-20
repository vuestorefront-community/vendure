# `useBilling`

## Features

`useBilling` composable can be used for:

* Loading billing address for the current cart.
* Saving billing address for the current cart.

## API

* `load` - function for fetching billing address. When invoked, it requests data from the API and populates `billing` property. This method accepts a single optional `params` object. The `params` has the following option:

  * `customQuery?: CustomQuery`
  
```ts
type CustomQuery = {
  getBasicProfile: string
}
```

* `save` - function for saving billing address. This method accepts a single `saveParams` object. The `saveParams` has the following options:

  * `billingDetails: CreateAddressInput`

<https://www.vendure.io/docs/graphql-api/admin/input-types/#createaddressinput>

  * `customQuery?: CustomQuery`

```ts
type CustomQuery = {
  updateCart: string
}
```

* `billing: OrderAddress` - a main data object that contains a billing address.

<https://www.vendure.io/docs/graphql-api/admin/object-types/#orderaddress>

* `loading: boolean` - a reactive object containing information about loading state of your `load` or `save` method.

* `error: UseBillingErrors` - a reactive object containing the error message, if `load` or `save` failed for any reason.

```ts
interface UseBillingErrors {
  load?: Error;
  save?: Error;
}
```

## Getters

We do not provide getters for checkout and its parts.

## Example

```js
import { useBilling } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core'

export default {
  setup () {
    const { load, billing } = useBilling();

    onSSR(async () => {
      await load();
    });

    return {
      billing
    };
  }
}
```
