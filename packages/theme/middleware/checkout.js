import { canEnterShipping, canEnterBilling, canEnterPayment, canEnterThankYou } from '../helpers';

export default async ({ app, $vsf }) => {
  const currentPath = app.context.route.fullPath.split('/checkout/')[1];
  const currentQuery = app.context.route.query;

  if (!currentPath) return;

  const cart = await $vsf.$vendure.api.getCart();
  const activeCart = cart?.data?.activeOrder;

  if (!cart?.data || !activeCart) return;

  switch (currentPath) {
    case 'shipping':
      if (!canEnterShipping(activeCart)) {
        app.context.redirect('/');
      }
      break;
    case 'billing':
      if (!canEnterBilling(activeCart)) {
        app.context.redirect('/');
      }
      break;
    case 'payment':
      if (!canEnterPayment(activeCart)) {
        app.context.redirect('/');
      }
      break;
    case 'thank-you':
      if (!canEnterThankYou(currentQuery)) {
        app.context.redirect('/');
      }
      break;
  }
};
