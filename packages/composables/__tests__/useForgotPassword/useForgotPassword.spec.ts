import { useForgotPassword } from '../../src/composables/useForgotPassword';

const context = {
  $vendure: {
    api: {
      requestPasswordReset: jest.fn(() => ({
        data: {
          test: 'test'
        }
      })),
      resetPassword: jest.fn(() => ({
        data: {
          test: 'test'
        }
      }))
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useForgotPasswordFactory: (params) => () => params
}));

describe('[vendure-composables] useForgotPassword', () => {
  it('triggers related products search', async () => {
    const { resetPassword } = useForgotPassword() as any;

    await resetPassword(context, { emailAddress: 'test' } as any);

    expect(context.$vendure.api.requestPasswordReset).toBeCalled();
  });

  it('triggers related products search', async () => {
    const { setNewPassword } = useForgotPassword() as any;

    await setNewPassword(context, {
      tokenValue: '123test',
      newPassword: 'test'
    } as any);

    expect(context.$vendure.api.resetPassword).toBeCalled();
  });
});
