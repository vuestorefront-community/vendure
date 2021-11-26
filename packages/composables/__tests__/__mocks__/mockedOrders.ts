export const mockedOrders = {
  items: [
    {
      id: '54',
      updatedAt: '2021-08-27T12:49:34.000Z',
      code: '9661TLN1RURBX24B',
      state: 'PaymentAuthorized',
      currencyCode: 'USD',
      total: 2595,
      lines: {
        id: '6',
        unitPriceWithTax: 716,
        quantity: 1,
        productVariant: {
          id: '24',
          name: 'Ethernet Cable',
          sku: 'A23334x30',
          __typename: 'ProductVariant'
        },
        __typename: 'OrderLine'
      },
      __typename: 'Order'
    },
    {
      id: '99',
      updatedAt: '2021-09-29T19:58:40.000Z',
      code: 'KJA4F5VYHGWYQCHF',
      state: 'AddingItems',
      currencyCode: 'USD',
      total: 2498,
      lines: {
        id: '7',
        unitPriceWithTax: 716,
        quantity: 1,
        productVariant: {
          id: '25',
          name: 'Ethernet Cable',
          sku: 'A23334x30',
          __typename: 'ProductVariant'
        },
        __typename: 'OrderLine'
      },
      __typename: 'Order'
    },
    {
      id: '100',
      updatedAt: '2021-10-22T17:42:51.000Z',
      code: 'WN8XYTUL4G9UPZZD',
      state: 'PaymentAuthorized',
      currencyCode: 'USD',
      total: 2498,
      lines: {
        id: '8',
        unitPriceWithTax: 716,
        quantity: 1,
        productVariant: {
          id: '27',
          name: 'Ethernet Cable',
          sku: 'A23334x30',
          __typename: 'ProductVariant'
        },
        __typename: 'OrderLine'
      },
      __typename: 'Order'
    },
    {
      id: '118',
      updatedAt: '2021-10-12T18:12:23.000Z',
      code: 'XZZ8Y4H4VYXUT25T',
      state: 'PaymentAuthorized',
      currencyCode: 'USD',
      total: 1597,
      lines: {
        id: '9',
        unitPriceWithTax: 716,
        quantity: 1,
        productVariant: {
          id: '04',
          name: 'Ethernet Cable',
          sku: 'A23334x30',
          __typename: 'ProductVariant'
        },
        __typename: 'OrderLine'
      },
      __typename: 'Order'
    }
  ],
  totalItems: 4,
  __typename: 'OrderList'
};
