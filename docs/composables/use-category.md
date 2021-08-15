# `useCategory`

## Features

`useCategory` composable is responsible for fetching a list of categories. A common usage scenario for this composable is navigation.

## API

- `search` - a main querying function that is used to query categories from eCommerce platform and populate the `categories` object with the result. Every time you invoke this function API request is made. This method accepts a single `params` object. The `params` has the following options:

    - `searchParams`
      
      - `id: string`
      - `slug: string`
    
    - `customQuery?: CustomQuery` 
    
```ts
type CustomQuery = {
  categories: string
}
```

- `categories: Category[]` - a main data object that contains an array of categories fetched by `search` method.

```ts
type Category = {
  __typename?: "Category";
  id: Scalars["String"];
  key?: Maybe<Scalars["String"]>;
  version: Scalars["Long"];
  name?: Maybe<Scalars["String"]>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars["String"]>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars["String"]>;
  slugAllLocales: Array<LocalizedString>;
  ancestorsRef: Array<Reference>;
  ancestors: Array<Category>;
  parentRef?: Maybe<Reference>;
  parent?: Maybe<Category>;
  orderHint: Scalars["String"];
  externalId?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  productCount: Scalars["Int"];
  stagedProductCount: Scalars["Int"];
  childCount: Scalars["Int"];
  children?: Maybe<Array<Category>>;
  createdAt: Scalars["DateTime"];
  lastModifiedAt: Scalars["DateTime"];
  assets: Array<Asset>;
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
  customFieldList?: Maybe<Array<CustomField>>;
}
```

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


```ts
interface ExtendedCategoryGetters extends CategoryGetters<Collection> {
  getNavigation: (collectionList: CollectionList) => AgnosticCategoryNavigation[];
  getTotalItems: (collectionList: CollectionList) => number;
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