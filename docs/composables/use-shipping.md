# `useShipping`

## Features

`useShipping` composable can be used for:

* Loading shipping address for the current cart.
* Saving shipping address for the current cart.

## API

* `load` - function for fetching shipping address. When invoked, it requests data from the API and populates `shipping` property. This method accepts a single optional `params` object. The `params` has the following option:

  * `customQuery?: CustomQuery`
  
```ts
type CustomQuery = {
  getBasicProfile: string
}
```

* `save` - function for saving shipping address. This method accepts a single `saveParams` object. The `saveParams` has the following options:

  * `shippingDetails: CreateAddressInput`

<https://www.vendure.io/docs/graphql-api/admin/input-types/#createaddressinput>

* `customQuery?: CustomQuery`

```ts
type CustomQuery = {
  updateCart: string
}
```

* `shipping: OrderAddress` - a main data object that contains a shipping address.

<https://www.vendure.io/docs/graphql-api/admin/object-types/#orderaddress>

* `loading: boolean` - a reactive object containing information about loading state of your `load` or `save` method.

* `error: UseShippingErrors` - a reactive object containing the error message, if `load` or `save` failed for any reason.

```ts
interface UseShippingErrors {
  load?: Error;
  save?: Error;
}
```

## Getters

We do not provide getters for checkout and its parts.

## Example

```js
import { useShipping } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core';

export default {
  setup () {
    const { load, shipping } = useShipping();

    onSSR(async () => {
      await load();
    });

    return {
      shipping
    };
  }
}
```
