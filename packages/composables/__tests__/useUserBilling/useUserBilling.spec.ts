import { useUserBilling } from '../../src/composables/useUserBilling';

const context = {
  $vendure: {
    api: {
      getActiveCustomer: jest.fn(() => ({
        data: { activeCustomer: { addresses: [{}, {}] } }
      })),
      createCustomerAddress: jest.fn(() => ({ data: { createCustomerAddress: 'createCustomerAddress' } })),
      deleteCustomerAddress: jest.fn(() => ({ data: { deleteCustomerAddress: true } })),
      updateCustomerAddress: jest.fn(() => ({ data: { updateCustomerAddress: 'updateCustomerAddress' } }))
    }
  },
  user: {
    user: {
      value: {
        addresses: [{}, {}]
      }
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useUserBillingFactory: (params) => () => params
}));

jest.mock('../../src/composables/useUser', () => ({
  useUser: jest.fn()
}));

describe('[vendure-composables] useUserBilling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads current user shipping address', async () => {
    const { load } = useUserBilling() as any;
    const response = await load(context);

    expect(response).toEqual([{}, {}]);
  });

  it('delete address', async () => {
    const { deleteAddress } = useUserBilling() as any;
    const response = await deleteAddress(context, { id: '1' });

    expect(response).toEqual([{}, {}]);
    expect(context.$vendure.api.deleteCustomerAddress).toBeCalled();
    expect(context.$vendure.api.getActiveCustomer).toBeCalled();
  });

  it('update address', async () => {
    const { updateAddress } = useUserBilling() as any;
    const response = await updateAddress(context, { id: '1', streetLine: 'dwadwa' });

    expect(response).toEqual([{}, {}]);
    expect(context.$vendure.api.updateCustomerAddress).toBeCalled();
    expect(context.$vendure.api.getActiveCustomer).toBeCalled();
  });

  it('create address', async () => {
    const { addAddress } = useUserBilling() as any;
    const response = await addAddress(context, { streetLine: 'dwadwa', countryCode: 'PL' });

    expect(response).toEqual([{}, {}]);
    expect(context.$vendure.api.createCustomerAddress).toBeCalled();
    expect(context.$vendure.api.getActiveCustomer).toBeCalled();
  });
});
