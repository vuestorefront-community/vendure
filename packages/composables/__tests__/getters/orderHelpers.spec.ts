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
    expect(orderGetters.getItems(mockedOrders)).toEqual([
      {
        id: '54',
        updatedAt: '2021-08-27T12:49:34.000Z',
        code: '9661TLN1RURBX24B',
        state: 'PaymentAuthorized',
        currencyCode: 'USD',
        total: 2595,
        __typename: 'Order'
      },
      {
        id: '99',
        updatedAt: '2021-09-29T19:58:40.000Z',
        code: 'KJA4F5VYHGWYQCHF',
        state: 'AddingItems',
        currencyCode: 'USD',
        total: 2498,
        __typename: 'Order'
      },
      {
        id: '100',
        updatedAt: '2021-10-22T17:42:51.000Z',
        code: 'WN8XYTUL4G9UPZZD',
        state: 'PaymentAuthorized',
        currencyCode: 'USD',
        total: 2498,
        __typename: 'Order'
      },
      {
        id: '118',
        updatedAt: '2021-10-12T18:12:23.000Z',
        code: 'XZZ8Y4H4VYXUT25T',
        state: 'PaymentAuthorized',
        currencyCode: 'USD',
        total: 1597,
        __typename: 'Order'
      }
    ]);
  });

  it('returns orders total', () => {
    expect(orderGetters.getTotalItems(mockedOrders)).toEqual(4);
  });
});
