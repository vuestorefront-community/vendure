# `useUserShipping`

## Features

`useUserShipping` composable can be used to:

* fetch existing shipping addresses,
* submit new shipping addresses,
* modify and delete existing shipping addresses.

## API

* `load` - function for fetching user addresses. When invoked, it requests data from the API and populates `shipping` property.

* `addAddress` - function for posting new shipping address. This method accepts a single `params` object. The `params` has the following options:

  * `address: CreateAddressInput`

  <https://www.vendure.io/docs/graphql-api/shop/input-types/#createaddressinput>

  * `customQuery?: customQuery`

    ```typescript
    type customQuery = {
    createCustomerAddress: string
    }
    ```

* `deleteAddress` - function for deleting existing shipping address. This method accepts a single `params` object. The `params` has the following options:

  * `address: DeleteCustomerAddress`

  * `customQuery?: customQuery`

    ```typescript
    type DeleteCustomerAddress = {
      id?: string;
    };
    type customQuery = {
      deleteCustomerAddress: string
    }
    ```

* `updateAddress` - function for updating existing shipping address. This method accepts a single `params` object. The `params` has the following options:

  * `address: UpdateAddressInput`

  <https://www.vendure.io/docs/graphql-api/shop/input-types/#updateaddressinput>

  * `customQuery?: customQuery`

    ```typescript
    type customQuery = {
      updateCustomerAddress: string
    }
    ```

* `setDefaultAddress` - Not used. Functionality handled with other methods.

* `shipping: Address[]` - a reactive data object containing a response from the backend.

  <https://www.vendure.io/docs/graphql-api/shop/object-types/#address>

* `loading: boolean` - a reactive object containing information about loading state of `load`, `addAddress`, `deleteAddress`, `updateAddress` and `setDefaultAddress` methods.

* `error: UseUserShippingErrors` - a reactive object containing the error message if some properties failed for any reason.

  ```ts
  interface UseUserShippingErrors {
    addAddress: Error;
    deleteAddress: Error;
    updateAddress: Error;
    load: Error;
    setDefaultAddress: Error;
  }
  ```

## Getters

* `getAddresses` - returns list of shipping addresses.

* `getDefault` - returns a default shipping address.

* `getTotal` - returns the total number of shipping addresses the user has.

* `getId` - returns id from an individual address.

* `getPostCode` - returns post code from an individual address.

* `getStreetName` - returns street name from an individual address.

* `getStreetNumber` - returns street number from an individual address.

* `getCity` - returns city name from an individual address.

* `getFirstName` - returns first name from an individual address.

* `getLastName` - returns last name from an individual address.

* `getCountry` - returns country name from an individual address.

* `getPhone` - return phone number from an individual address.

* `getEmail` - returns e-mail address from an individual address [TBD].

* `getProvince` - returns province (state) from an individual address.

* `getCompanyName` - returns company name from an individual address.

* `getTaxNumber` - returns tax number from an individual address [TBD].

* `getApartmentNumber` - returns apartment number from an individual address [TBD].

* `isDefault` - return information if address is current default.

  ```typescript
  interface UserShippingGetters {
    getAddresses: (shipping: Address[], criteria?: Record<string, any>) => Address[];
    getDefault: (shipping: Address[]) => Address;
    getTotal: (shipping: Address[]) => number;
    getId: (address: Address) => string | number;
    getPostCode: (address: Address) => string;
    getStreetName: (address: Address) => string;
    getStreetNumber: (address: Address) => string | number;
    getCity: (address: Address) => string;
    getFirstName: (address: Address) => string;
    getLastName: (address: Address) => string;
    getCountry: (address: Address) => string;
    getPhone: (address: Address) => string;
    getEmail: (address: Address) => string;
    getProvince: (address: Address) => string;
    getCompanyName: (address: Address) => string;
    getTaxNumber: (address: Address) => string;
    getApartmentNumber: (address: Address) => string | number;
    isDefault: (address: Address) => boolean;
  }
  ```

## Example

```typescript
import { onSSR } from '@vue-storefront/core';
import { useUserShipping, userShippingGetters } from '@vue-storefront/vendure';

export default {
  setup() {
    const {
      shipping,
      load,
      addAddress,
      deleteAddress,
      updateAddress
    } = useUserShipping();

    onSSR(async () => {
      await load();
    });

    return {
      shipping: computed(() => userShippingGetters.getAddresses(shipping.value)),
      userShippingGetters
    };
  }
};
```
