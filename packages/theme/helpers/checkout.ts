import { ARRANGING_PAYMENT } from './constants'

export const canEnterPayment = cart => canEnterShipping(cart) && canEnterBilling(cart) && cart?.shipping && cart?.state === ARRANGING_PAYMENT;

export const canEnterThankYou = query => Boolean(query?.order);

export const canEnterShipping = cart => Boolean(cart?.customer);

export const canEnterBilling = cart => cart?.shippingAddress?.streetLine1 && cart?.shippingAddress?.country
