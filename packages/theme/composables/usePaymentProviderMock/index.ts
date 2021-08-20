import { sharedRef } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePaymentProviderMock = () => {
  const status = sharedRef(false, 'usePaymentProviderMock-status');

  return {
    status
  };
};
