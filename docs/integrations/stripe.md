# Stripe

Integration with payment gateways is much more difficult than with Content Management System because it requires you to integrate it on both frontend and backend of your store. You have to handle payments via form (ideally a drop in component or redirect) and then configure your e-commerce platform to trust external provider that the payment was successful.

## Vue Storefront

As Vue Storefront uses Nuxt.js under the hood and is built using Vue.js, you can use Vue.js plugin or Nuxt.js module to integrate with Stripe:

- <https://vuestripe.com/> especially -> <https://vuestripe.com/nuxt/>
- <https://www.npmjs.com/package/nuxt-stripe-module>

## Vendure

To integrate Vendure with Stripe to accept and handle payments you can use official plugin that is described [here](https://www.vendure.io/docs/typescript-api/payments-plugin/stripe-plugin/)
