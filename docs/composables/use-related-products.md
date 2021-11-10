# `useRelatedProducts`

## Features

`useRelatedProducts` composable is responsible for:

* fetching products related to the current product

::: warning
This composable is not a part of standard Vue Storefront composables and was made excusively for Vendure integration to handle related products.
:::

## API

- `load` - method used to load related products

  - `params: { customQuery?: CustomQuery }`

```ts
type CustomQuery = {
  search: string
}
```

- `relatedProducts: SearchResponse` - object containing array of related products (as items) fetched by `load` method.

<https://www.vendure.io/docs/graphql-api/shop/object-types/#searchresponse>

- `loading: boolean` - a reactive object containing information about loading state of `load` method.

- `error: UseRelatedProducts` - reactive object containing the error message, if `load` failed for any reason.

```ts
interface UseRelatedProducts {
  load: Error;
}
```

## Getters

We do not provide getters for related products.

## Example

```js
// Product.vue component

import { useRelatedProducts } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core'

export default {
  setup () {
    const { load, relatedProducts } = useRelatedProducts();

    onSSR(async () => {
      await load();
    });

    return {
      relatedProducts
    }
  }
}
```
