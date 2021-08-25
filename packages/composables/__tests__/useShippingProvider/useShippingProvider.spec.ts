import { useShippingProvider } from '../../src/composables/useShippingProvider';
import { mockedShippingMethods } from '../__mocks__';

jest.mock('@vue-storefront/core', () => ({
  useShippingProviderFactory: (params) => () => params
}));

const context = {
  $vendure: {
    api: {
      getShippingMethods: jest.fn(() => Promise.resolve({ data: { eligibleShippingMethods: mockedShippingMethods }}))
    }
  }
};

describe('[vendure-composables] useShippingProvider', () => {
  it('loads shipping methods', async () => {
    const { load } = useShippingProvider() as any;

    const response = await load(context, {});

    expect(response).toEqual(mockedShippingMethods);
    expect(context.$vendure.api.getShippingMethods).toBeCalledWith(undefined);
  });
});
