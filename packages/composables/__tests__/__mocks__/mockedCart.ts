import { Order } from '@vue-storefront/vendure-api';

export const mockedCart: Order = {
  id: '33',
  code: 'SWZ6N7VFCPN11LTQ',
  state: 'AddingItems',
  active: true,
  lines: [
    {
      id: '48',
      featuredAsset: {
        id: '10',
        width: 1600,
        height: 1600,
        name: 'thomas-q-1229169-unsplash.jpg',
        preview:
          'http://localhost:3000/assets/preview/7b/thomas-q-1229169-unsplash__preview.jpg',
        focalPoint: null,
        __typename: 'Asset'
      },
      unitPrice: 597,
      unitPriceWithTax: 716,
      quantity: 2,
      linePriceWithTax: 1432,
      discountedLinePriceWithTax: 1432,
      productVariant: {
        sku: 'A23334x30',
        id: '24',
        name: 'Ethernet Cable',
        options: [],
        __typename: 'ProductVariant'
      },
      discounts: [],
      __typename: 'OrderLine'
    },
    {
      id: '49',
      featuredAsset: {
        id: '1',
        width: 1600,
        height: 1200,
        name: 'derick-david-409858-unsplash.jpg',
        preview:
          'http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
        focalPoint: null,
        __typename: 'Asset'
      },
      unitPrice: 229900,
      unitPriceWithTax: 275880,
      quantity: 1,
      linePriceWithTax: 275880,
      discountedLinePriceWithTax: 275880,
      productVariant: {
        sku: 'L2201516',
        id: '4',
        name: 'Laptop 15 inch 16GB',
        options: [
          {
            id: '2',
            code: '15-inch',
            name: '15 inch',
            group: {
              name: 'screen size',
              __typename: 'ProductOptionGroup'
            },
            __typename: 'ProductOption'
          },
          {
            id: '4',
            code: '16gb',
            name: '16GB',
            group: {
              name: 'RAM',
              __typename: 'ProductOptionGroup'
            },
            __typename: 'ProductOption'
          }
        ],
        __typename: 'ProductVariant'
      },
      discounts: [],
      __typename: 'OrderLine'
    }
  ],
  totalQuantity: 3,
  subTotal: 231094,
  subTotalWithTax: 277312,
  total: 231094,
  totalWithTax: 277312,
  shipping: 0,
  shippingWithTax: 0,
  shippingLines: [],
  discounts: [],
  __typename: 'Order'
} as any;

export const mockedCartWithoutProducts: Order = {
  id: '33',
  code: 'SWZ6N7VFCPN11LTQ',
  state: 'AddingItems',
  active: true,
  lines: [],
  totalQuantity: 3,
  subTotal: 231094,
  subTotalWithTax: 277312,
  total: 231094,
  totalWithTax: 277312,
  shipping: 0,
  shippingWithTax: 0,
  shippingLines: [],
  discounts: [],
  __typename: 'Order'
} as any;
