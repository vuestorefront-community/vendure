# `useCart`

## Features

`useCart` composable can be used to:

* load cart information,
* add, update and remove items in the cart,
* applying and removing coupons,
* checking if product is already added to the cart.

## API

* `cart: Order` - a main data object.

<https://www.vendure.io/docs/graphql-api/shop/object-types/#order>

* `load` - function required to fetch cart from a server or create brand new if it doesn't exist. This method accepts a single `params` object. The `params` has the following option:

  * `customQuery?: customQuery`
  
```ts
type CustomQuery = {
  getBasicProfile: string
}
```
  
* `addItem` - function for adding products to the cart. This method accepts a single `params` object. The `params` has the following options:

  * `product: AgnosticProductVariant`

  * `quantity: number`

  * `customQuery?: customQuery`

```ts
type AgnosticProductVariant = {
  _id: string,
  _variantId?: string,
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

type CustomQuery = {
  updateCart: string
}
```
  
* `updateItemQty` - function for updating quantity of a product that is already in the cart. This method accepts a single `params` object. The `params` has the following options:

  * `product: OrderLine`

  * `quantity: number`

  * `customQuery?: CustomQuery`

```ts
type CustomQuery = {
  updateCart: string
}
```

<https://www.vendure.io/docs/graphql-api/shop/object-types/#orderline>
  
* `removeItem` - function for removing a product that currently is in the cart. This method accepts a single `params` object. The `params` has the following options:

  * `product: OrderLine`

  * `customQuery?: CustomQuery`

```ts
type CustomQuery = {
  updateCart: string
}
```

<https://www.vendure.io/docs/graphql-api/shop/object-types/#orderline>
  
* `isInCart` - function for checking if a product is currently in the cart.

* `clear` - function for removing all items currently stored in cart (TBD).

* `applyCoupon` - function for applying coupon to cart. This method accepts a single `params` object. The `params` has the following options:

  * `couponCode: string`

  * `customQuery?: CustomQuery`

```ts
type CustomQuery = {
  updateCart: string
}
```
  
* `removeCoupon` - function for removing coupon applied to cart. This method accepts a single `params` object. The `params` has the following options:

  * `coupon: string`

  * `customQuery?: CustomQuery`

```ts
type CustomQuery = {
  updateCart: string
}
```

::: warning
This will soon have to be refactored as applyCoupon and removeCoupon accept the same code but in a form of two different parameters (coupon and couponCode). So in the future we will be changing the coupon parameter here to couponCode
:::
  
* `loading: boolean` - a reactive object containing information about loading state of the cart.

* `error: UseCartErrors` - reactive object containing the error message, if some properties failed for any reason.

```ts
interface UseCartErrors {
  addItem: Error;
  removeItem: Error;
  updateItemQty: Error;
  load: Error;
  clear: Error;
  applyCoupon: Error;
  removeCoupon: Error;
}
```

## Getters

* `getTotals` - returns cart totals.

* `getItems` - returns all items from cart.
  
* `getItemName` - returns product name.

* `getItemImage` - returns product image.

* `getItemPrice` - returns product price.

* `getItemQty` - returns product quantity.

* `getItemSku` - returns product SKU.

* `getTotalItems` - returns products amount.

* `getDiscounts` - returns all discounts.

* `getItemOptions` - returns product selected options.

* `getShippingPrice` - TBD.

* `getFormattedPrice` - TBD.

* `getCoupons` - TBD.

* `getItemAttributes` - returns product attribute (not used in favor of `getItemOptions`).

```ts
interface ExtendedCartGetters extends CartGetters<Order, OrderLine> {
  getTotals: (cart: Order) => AgnosticTotals;
  getShippingPrice: (cart: Cart) => number;
  getItems: (cart: Order) => OrderLine[];
  getItemName: (item: OrderLine) => string;
  getItemImage: (item: OrderLine) => string;
  getItemPrice: (item: OrderLine) => AgnosticPrice;
  getItemQty: (item: OrderLine) => number;
  getItemAttributes: (item: OrderLine, filterByAttributeName?: Array<string>) => Record<string, AgnosticAttribute | string>;
  getItemSku: (item: OrderLine) => string;
  getTotalItems: (cart: Order) => number;
  getFormattedPrice: (price: number) => string;
  getCoupons: (cart: Order) => AgnosticCoupon[];
  getDiscounts: (cart: Order) => AgnosticDiscount[];
  getItemOptions: (item: OrderLine, filterByAttributeName?: string[]) => AgnosticAttribute[]
}

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

interface AgnosticAttribute {
  name?: string;
  value: string | Record<string, any>;
  label: string;
}

interface AgnosticCoupon {
  id: string;
  name: string;
  code: string;
  value: number;
}

interface AgnosticDiscount {
  id: string;
  name: string;
  description: string;
  value: number;
  code?: string;
}
```

<https://www.vendure.io/docs/graphql-api/shop/object-types/#orderline>

## Example

```js
import { useCart, cartGetters } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core';

export default {
  setup () {
    const { cart, removeItem, updateItemQty, load: loadCart } = useCart();

    onSSR(async () => {
      await loadCart();
    })

    return {
      removeItem,
      updateItemQty,
      products: computed(() => cartGetters.getItems(cart.value)),
      totals: computed(() => cartGetters.getTotals(cart.value)),
      totalItems: computed(() => cartGetters.getTotalItems(cart.value))
    }
  }
}
```
