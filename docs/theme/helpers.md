# Helpers

Vendure integration uses several helpers to encapsulate logic and not write reduntant code.

## Category

* `getTreeWithoutEmptyCategories` - used to filter only categories that contain items

```ts
const getTreeWithoutEmptyCategories = (categoryTree: AgnosticCategoryTree[]): AgnosticCategoryTree[]
```

## Constants

* `COUNTRIES` - array of acceptable countries for shipping and billing

* `EMAIL_ADDRESS_CONFLICT_ERROR` - Vendure error when a customer email was already used

* `ARRANGING_PAYMENT` - state in checkout that needs to be transitioned in order to correctly process checkout.

## Product

* `getProductVariantByConfiguration` - returns a product variant that was configures from options (i.e. `screen-size`, `ram`)

```ts
const getProductVariantByConfiguration = (product: Product, configuration: unknown): ProductVariant
```

## Shipping-billing

* `mapAddressFormToOrderAddress` - transforms address provided by the customer in form into Vendure order
* `mapOrderAddressToAddressForm` - transforms Vendure order into address to be put in form for billing step
* `getCalculatedPrice` - converts price from cents to dolars.

```ts
const mapAddressFormToOrderAddress = (addressForm: AddressForm): OrderAddress

const mapOrderAddressToAddressForm = (orderAddress: OrderAddress): AddressForm

const getCalculatedPrice = (price: number): number
```

## Checkout

* `canEnterPayment` - verifies if customer can enter this state

* `canEnterThankYou` - verifies if customer can enter this state

* `canEnterShipping` - verifies if customer can enter this state

* `canEnterBilling` - verifies if customer can enter this state
