# `useProduct`

## Features

`useProduct` composable is responsible for fetching a list of products.

## API

- `search` - a main querying function that is used to query products from eCommerce platform and populate the `products` object with the result. Every time you invoke this function API request is made. This method accepts a single `params` object. The `params` has the following options:

  - `params?: ProductParams & { customQuery?: CustomQuery }`

```ts
export type ProductParams = {
  id?: string;
  slug?: string;
}

type CustomQuery = {
  products: string
}
```

- `products: Product` - a main data object that contains a master variant data and specific variants array fetched by `search` method.

<https://www.vendure.io/docs/graphql-api/shop/object-types/#product>

- `loading: boolean` - a reactive object containing information about loading state of your `search` method.

- `error: UseProductErrors` - reactive object containing the error message, if `search` failed for any reason.

```ts
interface UseProductErrors {
  search: Error;
}
```

## Getters

- `getName` - returns product name.

- `getSlug` - returns product slug.

- `getPrice` - returns product price.

- `getGallery` - returns product gallery.

- `getCoverImage` - returns cover image of product.

- `getDescription` - returns product description.

- `getCategoryIds` - returns all product categories.

- `getId` - returns product ID.

- `getByFilters` - returns agnostic product variant by filters like master.

- `getOptions` - returns agnostic product options.

- `getCategoryNames` - returns category names for certain product.

- `getFiltered` - returns filtered product (not used in favor of `getByFilters`).

- `getAttributes` - returns product attributes (not used in favor of `getOptions`).

- `getFormattedPrice` - TBD.

- `getTotalReviews` - TBD.

- `getAverageRating` - TBD.

```ts
interface ExtendedProductGetters extends ProductGetters<AgnosticProductVariant {
  getName: (product: AgnosticProductVariant | Readonly<AgnosticProductVariant>) => string;
  getSlug: (product: AgnosticProductVariant | Readonly<AgnosticProductVariant>) => string;
  getPrice: (product: AgnosticProductVariant | Readonly<AgnosticProductVariant>) => AgnosticPrice;
  getGallery: (product: AgnosticProductVariant) => AgnosticMediaGalleryItem[];
  getCoverImage: (product: AgnosticProductVariant) => string;
  getFiltered: (products: AgnosticProductVariant[], filters: ProductVariantFilters | any = {}) => AgnosticProductVariant[];
  getAttributes: (products: AgnosticProductVariant[] | AgnosticProductVariant, filterByAttributeName?: string[]) => Record<string, AgnosticAttribute | string>;
  getDescription: (product: AgnosticProductVariant) => string;
  getCategoryIds: (product: AgnosticProductVariant) => string[];
  getId: (product: AgnosticProductVariant) => string;
  getFormattedPrice: (price: number) => string;
  getTotalReviews: (product: AgnosticProductVariant) => number;
  getAverageRating: (product: AgnosticProductVariant) => number;
  getByFilters: (product: Product, filters?: ProductFilter) => AgnosticProductVariant[] | AgnosticProductVariant;
  getOptions: (product: Product, filters?: string[]) => AgnosticProductOptions[]
  getCategoryNames: (product: Product) => string[];
}

interface AgnosticPrice {
  regular: number | null;
  special?: number | null;
}

interface AgnosticMediaGalleryItem {
  small: string;
  normal: string;
  big: string;
}

interface AgnosticAttribute {
  name?: string;
  value: string | Record<string, any>;
  label: string;
}

type AgnosticProductVariant = {
  _id: string,
  _description: string,
  _categoriesRef: string[],
  name: string,
  sku: string,
  slug: string,
  images: string [],
  price: {
    original: number,
    current: number
  },
};

interface ProductVariantFilters {
  master?: boolean;
  attributes?: Record<string, string>;
}

type AgnosticProductOptions = {
  id?: string,
  value?: string;
  label?: string;
  options?: AgnosticAttribute[] & {
    id?: string
  };
  __typename?: string;
}
```

<https://www.vendure.io/docs/graphql-api/shop/object-types/#product>

## Examples

```js
// search single product
import { useProduct, productGetters } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core'
import { computed } from '@vue/composition-api';

export default {
  setup () {
    const { products, search, loading, error } = useProduct('<UNIQUE_ID>');

    onSSR(async () => {
      await search({ id: '1' })
    })

    return {
      loading,
      error,
      product: computed(() => productGetters.getByFilters(products.value, { master: true, attributes: context.root.$route.query })),
      option: computed(() => productGetters.getOptions(products.value)),
      configuration: computed(() => productGetters.getCategoryIds(product.value))
    }
  }
}
```
