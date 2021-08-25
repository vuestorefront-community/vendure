import { useBilling } from '../../src/composables/useBilling';
import { useCart } from '../../src/composables/useCart';

jest.mock('../../src/composables/useCart', () => ({
  useCart: jest.fn()
}));

jest.mock('@vue-storefront/core', () => ({
  useBillingFactory: (params) => () => params
}));

describe('[vendure-composables] useBilling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('provides cart', async () => {
    const { provide } = useBilling() as any;
    const mockedCart = '12312312';
    (useCart as jest.Mock).mockImplementation(() => mockedCart);

    const toProvide = provide();

    expect(toProvide).toMatchObject({ cart: mockedCart });
    expect(useCart).toHaveBeenCalled();
  });

  it('loads billing address via request if cart is not present', async () => {
    const { load } = useBilling() as any;
    const loadedBillingAddress = 'loadedBillingAddress';
    const context = {
      cart: {
        cart: {
          value: {
            billingAddress: null
          }
        },
        load: jest.fn(() => {
          context.cart.cart.value.billingAddress = loadedBillingAddress;
        })
      }
    };

    const response = await load(context, {});

    expect(response).toBe(loadedBillingAddress);
    expect(context.cart.load).toHaveBeenCalled();
  });

  it('loads billing address from cart if cart is present', async () => {
    const { load } = useBilling() as any;
    const loadedBillingAddress = 'loadedBillingAddress';
    const context = {
      cart: {
        cart: {
          value: {
            billingAddress: loadedBillingAddress
          }
        },
        load: jest.fn()
      }
    };

    const response = await load(context, {});

    expect(response).toBe(loadedBillingAddress);
  });

  it('saves billing details, updates cart and returns billing details', async () => {
    const { save } = useBilling() as any;
    const newBillingAddress = 'newBillingAddress';
    const context = {
      cart: {
        cart: {
          value: {
            billingAddress: null
          }
        },
        setCart: jest.fn(address => {
          context.cart.cart.value.billingAddress = address;
        })
      },
      $vendure: {
        api: {
          updateAddressDetails: jest.fn(() => ({
            data: {
              setOrderBillingAddress: {
                billingAddress: newBillingAddress
              }
            }
          }))
        }
      }
    };

    const response = await save(context, { billingAddress: newBillingAddress });

    expect(response).toBe(newBillingAddress);
  });
});
