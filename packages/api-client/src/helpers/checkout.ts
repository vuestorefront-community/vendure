import { Order } from '../types';

export const isCustomerDataFilled = (order: Order): boolean => {
  if (!order) return;
  return Boolean(order?.customer?.emailAddress && order?.billingAddress?.streetLine1 && order?.shippingAddress?.streetLine1);
};
