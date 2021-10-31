# Middleware

## Checkout

Router middleware responsible for checking if customer can visit certain steps of checkout page.
Uses following helpers to verify if a page can be displayed to the customer:

* `canEnterPayment`

* `canEnterThankYou`

* `canEnterShipping`

* `canEnterBilling`

If a helper returns false, customer will be redirected to homepage.

## Is-Authenticated

This middleware is used to check if a user is logged in. If so, he/she will be able to view MyAccount page. If not a redirect to homepage will be done.
