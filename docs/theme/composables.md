# Composables

::: warning
These composables are not coming from `@vue-storefront/vendure` npm package but they are a part of theme that you have complete control as they are shipped with the template project and serve mainly a UI or mock function.
:::

## usePaymentProviderMock

Used as a mock for payment provider like `Adyen`, `Stripe`, or any other. In case of real world application it should be removed in favor of ready `usePaymentProvider()`.

## useUiHelpers

Set of helper functions that are formed into a composable and are usem mainly to work with urls, modals, filters, and sorting.
