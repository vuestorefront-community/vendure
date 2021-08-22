# `useShippingProvider`

## Features

`useShippingProvider` composable can be used for:

* Loading shipping methods for the current cart.

## API

* `load` - function for fetching shipping method. When invoked, it requests data from the API and populates the `response` key inside the `state` property. This method accepts a single optional `params` object. The `params` has the following option:

  * `customQuery?: CustomQuery`
  
```ts
type CustomQuery = {
  getBasicProfile: string
}
```

* `save` - not used in this integration.

::: warning
This integration does not use the `save` method. Instead a direct call from the theme to the API Client is being made and the response is saved as a new Cart object to update prices, details, etc. It works as follows:

```ts
import { useCart, useShippingProvider } from '@vue-storefront/vendure';

export default {
  setup () {
    const { setCart } = useCart();

    const setShippingMethod = (shippingMethod) => {
      const newOrder = await $vendure.api.setShippingMethod({ shippingMethodId: shippingMethod.id })
      setCart(newOrder.data.setOrderShippingMethod);
    }
  }
}
```

:::

* `state: ShippingMethodQuote[]` - a main data object that contains shipping methods

<https://www.vendure.io/docs/graphql-api/shop/object-types/#shippingmethodquote>

* `loading: boolean` - a reactive object containing information about loading state of your `load` or `save` method.

* `error: UseShippingProviderErrors` - a reactive object containing the error message, if `load` or `save` failed for any reason.

```ts
interface UseShippingProviderErrors {
  load?: Error;
  save?: Error;
}
```

## Getters

We do not provide getters for checkout and its parts.

## Example

```js
import { useShippingProvider } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core';

export default {
  setup () {
    const { load, state } = useShippingProvider();

    onSSR(async () => {
      await load();
    });
    
    return {
      state
    };
  }
}
```
