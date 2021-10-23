# `useUserOrder`

## Features

`useUserOrder` composable is responsible for interactions with customer order history from your eCommerce backend.

## API

- `search` - the main querying function used to query user order history from the eCommerce platform and populate the `orders` object with the result. This method accepts a single params object.

- `orders: OrderList` - the main data object that contains an array of orders fetched by the `search` method and total number of orders.

<https://www.vendure.io/docs/graphql-api/admin/object-types/#orderlist>

- `loading: boolean` - a reactive object containing information about the loading state of your `searchOrders` method.

- `error: UseUserOrderErrors` - reactive object containing the error message if some properties failed for any reason.

  ```ts
  interface UseUserOrderErrors {
    search: Error;
  }
  ```

## Getters

- `getDate` - returns order date.

- `getId` - returns order Id.

- `getStatus` - returns order status.

- `getPrice` - returns order price.

- `getItems` - returns order items.

- `getItemSku` - returns order item sku [TBD].

- `getItemName` - returns order item name [TBD].

- `getItemQty` - returns order item quantity [TBD].

- `getItemPrice` - returns order item price [TBD].

- `getFormattedPrice` - returns order price with currency sign.

- `getTotalItems` - returns total number of orders (not affected by pgaination limit).

  ```ts
  interface UserOrderGetters {
    getDate: (order: Order) => string;
    getId: (order: Order) => string;
    getStatus: (order: Order) => AgnosticOrderStatus;
    getPrice: (order: Order) => number;
    getItems: (order: Order) => LineItem[];
    getItemSku: (item: LineItem) => string;
    getItemName: (item: LineItem) => string;
    getItemQty: (item: LineItem) => number;
    getItemPrice: (item: LineItem) => number;
    getFormattedPrice: (price: number) => string;
    getOrdersTotal: (orders: OrderQueryResult) => number;
  }
  ```

## Example

```js
import { useUserOrder, orderGetters } from '@vue-storefront/vendure';
import { onSSR } from '@vue-storefront/core';

export default {
  setup() {
    const { orders, search, loading, error } = useUserOrder();

    onSSR(async () => {
      await search();
    });

    return {
      // extract a list of orders from a `orders` object
      orders: computed(() => orderGetters.getItems(orders.value)),
    };
  }
};
```
