import { mockedOrders } from '../__mocks__';
import { orderGetters } from './../../src/getters/orderGetters';
import * as utils from './../../src/helpers/_utils';

jest.spyOn(utils, 'createPrice').mockImplementation((price) => price / 100);

export const mockedOrder = mockedOrders.items[0];

describe('[vendure-getters] order getters', () => {
  it('returns order date', () => {
    expect(orderGetters.getDate(mockedOrder)).toBe('2021-08-27T12:49:34.000Z');
  });

  it('returns order id', () => {
    expect(orderGetters.getId(mockedOrder)).toEqual('54');
  });

  it('returns order status', () => {
    expect(orderGetters.getStatus(mockedOrder)).toEqual('PaymentAuthorized');
  });

  it('returns order price', () => {
    expect(orderGetters.getPrice(mockedOrder)).toEqual(25.95);
  });

  it('returns orders items', () => {
    expect(orderGetters.getItems(mockedOrder)).toEqual({
      __typename: 'OrderLine',
      id: '6',
      productVariant: {
        __typename: 'ProductVariant',
        id: '24',
        name: 'Ethernet Cable',
        sku: 'A23334x30'
      },
      quantity: 1,
      unitPriceWithTax: 716
    });
  });

  it('returns orders total', () => {
    expect(orderGetters.getTotalItems(mockedOrders)).toEqual(4);
  });
});
