import { mockedCart } from '../__mocks__';
import { cartGetters } from './../../src/getters/cartGetters';
import * as utils from './../../src/helpers/_utils';

jest.spyOn(utils, 'createPrice').mockImplementation((price) => price);
const item = mockedCart.lines[0];

describe('[vendure-getters] cart getters', () => {
  it('returns item name', () => {
    expect(cartGetters.getItemName(item)).toBe('Ethernet Cable');
  });

  it('returns item price', () => {
    expect(cartGetters.getItemPrice(item)).toEqual({ regular: 1432, special: undefined });
  });

  it('returns line items', () => {
    expect(cartGetters.getItems(mockedCart)).toEqual(mockedCart.lines);
  });

  it('returns item image', () => {
    expect(cartGetters.getItemImage(item)).toEqual('http://localhost:3000/assets/preview/7b/thomas-q-1229169-unsplash__preview.jpg');
  });

  it('returns item quantity', () => {
    expect(cartGetters.getItemQty(item)).toEqual(2);
  });

  it('returns item sku', () => {
    expect(cartGetters.getItemSku(item)).toEqual('A23334x30');
  });

  it('returns totals', () => {
    expect(cartGetters.getTotals(mockedCart)).toEqual({ total: 277312, subtotal: 277312 });
  });

  it('returns total items', () => {
    expect(cartGetters.getTotalItems(mockedCart)).toEqual(3);
  });

  it('returns order discounts', () => {
    expect(cartGetters.getDiscounts(mockedCart)).toEqual([]);
  });

  it('returns item options', () => {
    const itemWithOptions = mockedCart.lines[1];
    expect(cartGetters.getItemOptions(itemWithOptions)).toEqual([
      {
        label: 'screen size',
        value: '15 inch'
      },
      {
        label: 'RAM',
        value: '16GB'
      }
    ]);
  });
});
