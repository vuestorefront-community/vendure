import { canEnterShipping, canEnterBilling, canEnterPayment, canEnterThankYou, CheckoutSteps } from '../helpers';

export default async ({ app, $vsf }) => {
  const currentPath = app.context.route.fullPath.split('/checkout/')[1];

  if (!currentPath) return;

  const cart = await $vsf.$vendure.api.getCart();
  const activeCart = cart?.data?.activeOrder;

  if (currentPath === CheckoutSteps.Shipping && !canEnterShipping(activeCart)) {
    app.context.redirect('/');

  } else if (currentPath === CheckoutSteps.Billing && !canEnterBilling(activeCart)) {
    app.context.redirect('/');

  } else if (currentPath === CheckoutSteps.Payment && !canEnterPayment(activeCart)) {
    app.context.redirect('/');

  } else if (currentPath === CheckoutSteps.ThankYou && !canEnterThankYou(app.context)) {
    app.context.redirect('/');
  }
};
