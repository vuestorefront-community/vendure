# `useUserBilling`

## Features

`useUserBilling` composable can be used to:

* fetch existing billing addresses,
* submit new billing addresses,
* modify and delete existing billing addresses.

## API

* `load` - function for fetching user addresses. When invoked, it requests data from the API and populates `billing` property.

* `addAddress` - function for posting new billing address. This method accepts a single `params` object. The `params` has the following options:

  * `address: CreateAddressInput`

  <https://www.vendure.io/docs/graphql-api/shop/input-types/#createaddressinput>

  * `customQuery?: customQuery`

    ```typescript
    type customQuery = {
    addBillingAddress: string
    }
    ```

* `deleteAddress` - a function for deleting existing billing address. This method accepts a single `params` object. The `params` has the following options:

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

* `updateAddress` - a function for updating existing billing address. This method accepts a single `params` object. The `params` has the following options:

  * `address: UpdateAddressInput`

  <https://www.vendure.io/docs/graphql-api/shop/input-types/#updateaddressinput>

  * `customQuery?: customQuery`

    ```typescript
    type customQuery = {
      updateCustomerAddress: string
    }
    ```

* `setDefaultAddress` - Not used. Functionality handled with other methods.

* `billing: Address[]` - a reactive data object containing response from the backend.

  <https://www.vendure.io/docs/graphql-api/shop/object-types/#address>

* `loading: boolean` - a reactive object containing information about loading state of `load`, `addAddress`, `deleteAddress`, `updateAddress` and `setDefaultAddress` methods.

* `error: UseUserBillingErrors` - a reactive object containing the error message if some properties failed for any reason.

## Getters

* `getAddresses` - returns list of billing addresses.

* `getDefault` - returns a default billing address.

* `getTotal` - returns a total number of billing addresses the user has.

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
  interface UserBillingGetters {
    getAddresses: (billing: Address[], criteria?: Record<string, any>) => Address[];
    getDefault: (billing: Address[]) => Address;
    getTotal: (billing: Address[]) => number;
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
import { useUserBilling, userBillingGetters } from '@vue-storefront/vendure';

export default {
  setup() {
    const {
      billing,
      load,
      addAddress,
      deleteAddress,
      updateAddress
    } = useUserBilling();

    onSSR(async () => {
      await load();
    });

    return {
      billing: computed(() => userBillingGetters.getAddresses(billing.value)),
      userBillingGetters
    };
  }
};
```
