# `useCategory`

## Features

`useCategory` composable is responsible for fetching a list of categories. A common usage scenario for this composable is navigation.

::: warning
This composable uses a custom useCategoryFactory that is not part of the Vue Storefront Core package. Functionality and types can differ from other integrations. For more details visit [code repository](https://github.com/vuestorefront/vendure/blob/main/packages/composables/src/factories/useCategoryFactory.ts)
:::

## API

- `search` - a main querying function that is used to query categories from eCommerce platform and populate the `categories` object with the result. Every time you invoke this function API request is made. This method accepts a single `params` object. The `params` has the following options:

  - `params: CollectionParams & { customQuery?: CustomQuery }`

```ts
type CollectionParams = {
  options?: CollectionListOptions;
}

type CustomQuery = {
  categories: string
}
```

<https://www.vendure.io/docs/graphql-api/shop/input-types/#collectionlistoptions>

- `categories: CollectionList` - a main data object that contains an array of category items fetched by `search` method.

<https://www.vendure.io/docs/graphql-api/shop/object-types/#collectionlist>

- `loading: boolean` - a reactive object containing information about loading state of your `search` method.

- `error: UseCategoryErrors` - reactive object containing the error message, if `search` failed for any reason.

```ts
interface UseCategoryErrors {
  search: Error;
}
```

## Getters

- `getNavigation` - returns global category navigation.

- `getTotalItems` - returns total number of categories.

- `getTree` - returns category tree (not used in favor of `facetGetters.getTree`)

```ts
interface ExtendedCategoryGetters extends CategoryGetters<Collection> {
  getNavigation: (collectionList: CollectionList) => AgnosticCategoryNavigation[];
  getTotalItems: (collectionList: CollectionList) => number;
  getTree: (category: Collection) => AgnosticCategoryTree
}

type AgnosticCategoryNavigation = {
  name: string;
  link: string;
}
```

## Example

```js
// Header.vue component

import { useCategory, categoryGetters } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core'

export default {
  setup () {
    const { categories, search } = useCategory('menu-categories');

    const headerNavigation = computed(() => categoryGetters.getNavigation(categories.value));

    onSSR(async () => {
      await search();
    });

    return {
      categories,
      headerNavigation
    }
  }
}
```
