import { usePayment } from '../../src/composables/usePayment';

const context = {
  $vendure: {
    api: {
      setPaymentMethod: jest.fn(() => ({
        data: {
          addPaymentToOrder: {}
        }
      })),
      getPaymentMethods: jest.fn(() => ({
        data: {
          eligiblePaymentMethods: []
        }
      }))
    }
  }
};

jest.mock('../../src/factories/', () => ({
  usePaymentFactory: (params) => () => params
}));

describe('[vendure-composables] usePayment', () => {
  it('loads payment methods', async () => {
    const { load } = usePayment() as any;

    await load(context, { customQuery: '' });

    expect(context.$vendure.api.getPaymentMethods).toBeCalled();
  });

  it('sets payment method', async () => {
    const { set } = usePayment() as any;

    await set(context, { metadata: {}, method: '', customQuery: '' });

    expect(context.$vendure.api.setPaymentMethod).toBeCalled();
  });
});
