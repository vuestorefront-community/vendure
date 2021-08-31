import {
  CartGetters,
  AgnosticPrice,
  AgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute
} from '@vue-storefront/core';
import type { Order, OrderLine } from '@vue-storefront/vendure-api';
import { createPrice } from '../helpers/_utils';

interface ExtendedCartGetters extends CartGetters<Order, OrderLine> {
  getItemOptions: (item: OrderLine, filterByAttributeName?: string[]) => AgnosticAttribute[]
}

const getItems = (cart: Order): OrderLine[] => {
  if (!cart?.lines) return [];

  return cart?.lines;
};

const getItemName = (item: OrderLine): string => {
  return item?.productVariant?.name || '';
};

const getItemImage = (item: OrderLine): string => {
  return item?.featuredAsset?.preview || '';
};

const getItemPrice = (item: OrderLine): AgnosticPrice => {
  return {
    regular: createPrice(item?.linePriceWithTax),
    special: createPrice(item?.discountedLinePrice)
  };
};

const getItemQty = (item: OrderLine): number => {
  return item?.quantity || 0;
};

const getItemSku = (item: OrderLine): string => {
  return item?.productVariant?.sku || '';
};

const getTotals = (cart: Order): AgnosticTotals => {
  return {
    total: createPrice(cart?.totalWithTax),
    subtotal: createPrice(cart?.subTotalWithTax)
  };
};

const getTotalItems = (cart: Order): number => {
  return cart?.totalQuantity || 0;
};

const getDiscounts = (cart: Order): AgnosticDiscount[] => {
  return cart?.discounts?.map(discount => ({
    id: discount.type,
    name: discount.adjustmentSource,
    value: createPrice(discount.amountWithTax),
    description: discount.description
  }));
};

// TODO: Develop later filterByAttributeName
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getItemOptions = (item: OrderLine, filterByAttributeName?: string[]): AgnosticAttribute[] => {
  const attributes = item?.productVariant?.options?.map(attribute => ({
    label: attribute.group.name,
    value: attribute.name
  }));

  return attributes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFormattedPrice = (price: number): string => {
  return '';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCoupons = (cart: Order): AgnosticCoupon[] => {
  return [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getShippingPrice = (cart: Order): number => {
  return 0;
};

// Not used in favor of GetItemOptions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getItemAttributes = (item: OrderLine, filterByAttributeName?: Array<string>): Record<string, string | AgnosticAttribute> => {
  return {
    color: 'red'
  };
};

export const cartGetters: ExtendedCartGetters = {
  getTotals,
  getShippingPrice,
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getDiscounts,
  getItemOptions
};
