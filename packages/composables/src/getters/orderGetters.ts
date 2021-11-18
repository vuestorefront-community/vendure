import { UserOrderGetters } from '@vue-storefront/core';
import type { OrderList, Order, OrderItem, OrderLine } from '@vue-storefront/vendure-api';
import { createPrice } from '../helpers';

// TODO: to be used later
type Orders = { offset: number; count: number; total: number; results: Order[]; }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDate(order: Order): string {
  return order?.updatedAt || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(order: Order): string {
  return order?.id || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStatus(order: Order): string {
  return order?.state || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(order: Order): number | null {
  return createPrice(order?.total);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(order: Order): OrderLine[] {
  return order?.lines || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: OrderLine): string {
  return item?.productVariant?.sku || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: OrderLine): string {
  return item?.productVariant?.name || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: OrderLine): number {
  return item?.quantity || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: OrderItem): number {
  return createPrice(item?.unitPriceWithTax) || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getOrdersTotal(orders: Orders): number {
  return 0;
}

function getTotalItems(order: OrderList): number {
  return order?.totalItems || 0;
}

export const orderGetters: UserOrderGetters<any, any> = {
  getDate,
  getId,
  getStatus,
  getPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getFormattedPrice,
  getOrdersTotal,
  getTotalItems
};
