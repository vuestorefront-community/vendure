import { mockedCart, mockedCartWithoutProducts } from '../__mocks__/mockedCart';
import { useCart } from './../../src/composables/useCart';

const context = {
  $vendure: {
    api: {
      addToCart: jest.fn(() => ({ data: { addItemToOrder: 'some cart' } })),
      getCart: jest.fn(() => ({ data: { activeOrder: 'get cart' } })),
      removeFromCart: jest.fn(() => ({
        data: { removeOrderLine: 'remove item cart' }
      })),
      updateCartQuantity: jest.fn(() => ({
        data: { adjustOrderLine: 'update cart quantity' }
      })),
      applyCartCoupon: jest.fn(() => ({
        data: { applyCouponCode: 'apply coupon code' }
      })),
      removeCartCoupon: jest.fn(() => ({
        data: { removeCouponCode: 'remove coupon code' }
      }))
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useCartFactory: (params) => () => params
}));

const customQuery = undefined;

describe('[vendure-composables] useCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('adds to cart', async () => {
    const { addItem } = useCart() as any;
    const response = await addItem(context, {
      product: { _variantId: 'product1' },
      quantity: 3
    });

    expect(response).toEqual('some cart');
    expect(context.$vendure.api.addToCart).toBeCalledWith(
      { productVariantId: 'product1', quantity: 3 },
      customQuery
    );
  });

  it('gets current cart', async () => {
    const { load } = useCart() as any;
    const response = await load(context, { customQuery });

    expect(response).toEqual('get cart');
  });

  it('removes product from cart (order line)', async () => {
    const { removeItem } = useCart() as any;
    const response = await removeItem(context, { product: { id: '1' } });

    expect(response).toEqual('remove item cart');
    expect(context.$vendure.api.removeFromCart).toBeCalledWith(
      { orderLineId: '1' },
      customQuery
    );
  });

  it('updates the cart product quantity', async () => {
    const { updateItemQty } = useCart() as any;
    const response = await updateItemQty(context, {
      product: { id: '1' },
      quantity: 1
    });

    expect(response).toEqual('update cart quantity');
    expect(context.$vendure.api.updateCartQuantity).toBeCalledWith(
      { orderLineId: '1', quantity: 1 },
      customQuery
    );
  });

  it('applies cart coupon', async () => {
    const { applyCoupon } = useCart() as any;
    const response = await applyCoupon(context, { couponCode: '1' });

    expect(response).toEqual({
      updatedCart: 'apply coupon code',
      updatedCoupon: '1'
    });
    expect(context.$vendure.api.applyCartCoupon).toBeCalledWith(
      { couponCode: '1' },
      customQuery
    );
  });

  it('removes cart coupon', async () => {
    const { removeCoupon } = useCart() as any;
    const response = await removeCoupon(context, { coupon: '1' });

    expect(response).toEqual({
      updatedCart: 'remove coupon code'
    });
    expect(context.$vendure.api.removeCartCoupon).toBeCalledWith(
      { couponCode: '1' },
      customQuery
    );
  });

  it('checks if product is in cart', async () => {
    const { isInCart } = useCart() as any;
    const response = await isInCart(context, { currentCart: mockedCart, product: { _id: '4' } });

    expect(response).toEqual(true);
  });

  it('returns false when product is not in cart', async () => {
    const { isInCart } = useCart() as any;
    const response = await isInCart(context, { currentCart: mockedCart, product: { _id: '173' } });

    expect(response).toEqual(false);
  });

  it('returns false when there are no products in cart', async () => {
    const { isInCart } = useCart() as any;
    const response = await isInCart(context, { currentCart: mockedCartWithoutProducts, product: { _id: '173' } });

    expect(response).toEqual(false);
  });
});
