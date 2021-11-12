# `useWishlist`

## Features

`useWishlist` composable is responsible for integrating with a wishlist. It allows to:

- fetch products from the wishlist
- add products to the wishlist
- remove products from the wishlist
- check if a product is on the wishlist

::: warning
This composable is implemented using Local Storage as Vendure does not yet have a wishlist feature.
:::

## API

- `wishlist: Wishlist` - a main data object.

  ```ts
  type WishlistItem = {
    _id: string,
    _variantId?: string,
    _description: string,
    _categoriesRef: string[],
    name: string,
    sku: string,
    slug: string,
    images: string [],
    collections?: ProductCollection[],
    price: {
        original: number,
        current: number
    },
  };

  type Wishlist = Array<WishlistItem>;
  ```

- `load` - a function used to retrieve wishlist products. When invoked, it requests current local storage and populates `wishlist` property.

- `addItem` - a function used to add a new product to the wishlist. When invoked, it submits data to the local storage and populates `wishlist` property with updated information.

- `removeItem` - a function that removes products from the wishlist. It submits data to local storage and populates the updated `wishlist` property.

- `clear` - a function that removes all products from the wishlist and populates clear `wishlist` property.

- `isInWishlist` - a function that checks if a product is on the wishlist. It returns boolean value. This method accepts a single `params` object. The `params` has the following option:

  - `product: AgnosticProductVariant` - a product used to check if it is currently in the wishlist.

- `loading: boolean` - a reactive object containing information about loading state of the cart.

- `error: UseWishlistErrors` - reactive object containing the error message, if some properties failed for any reason.

  ```ts
  interface UseWishlistErrors {
    addItem: Error;
    removeItem: Error;
    load: Error;
    clear: Error;
  }
  ```

## Getters

- `getItems` - returns list of products on the wishlist

- `getItemName` - returns product's name from the wishlist.

- `getItemImage` - returns product's image from the wishlist.

- `getItemPrice` - returns product's price from the wishlist.

- `getItemQty` - returns a quantity of product which is on the wishlist. Currently, by default it is set to one as the product in the wishlist is a single entity.

- `getItemSku` - returns product's SKU code.

- `getTotals` - returns price of products.

- `getTotalItems` - returns an amount of all items that are currently on the wishlist.

  ```typescript
  interface WishlistGetters {
    getTotals: (wishlist: Wishlist) => AgnosticTotals;
    getItems: (wishlist: Wishlist) => WishlistItem[];
    getItemName: (product: WishlistItem) => string;
    getItemImage: (product: WishlistItem) => string;
    getItemPrice: (product: WishlistItem) => AgnosticPrice;
    getItemQty: (product: WishlistItem) => number;
    getItemAttributes: (product: WishlistItem, filterByAttributeName?: string[]) => ({});
    getItemSku: (product: WishlistItem) => string;
    getTotalItems: (wishlist: Wishlist) => number;
    getFormattedPrice: (price: number) => string;
  };

  interface AgnosticTotals {
    total: number;
    subtotal: number;
    special?: number;
    [x: string]: unknown;
  }

  interface AgnosticPrice {
    regular: number | null;
    special?: number | null;
  }
  ```

## Example

```typescript
import { onSSR } from '@vue-storefront/core';
import { useWishlist, wishlistGetters } from '@vue-storefront/vendure';

export default {
  setup() {
    const { load: loadWishlist } = useWishlist();

    const wishlistItems = computed(() => wishlistGetters.getItems());

    onSSR(async () => {
      await loadWishlist();
    });

    return {
      wishlistItems
    };
  }
};
```
