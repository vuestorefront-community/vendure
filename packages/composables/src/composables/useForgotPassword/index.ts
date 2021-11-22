import { Context, UseForgotPassword, useForgotPasswordFactory, UseForgotPasswordFactoryParams } from '@vue-storefront/core';
import { ForgotPasswordResult } from '../../types';

const useForgotPasswordFactoryParams: UseForgotPasswordFactoryParams<ForgotPasswordResult> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetPassword: async (context: Context, { email, currentResult, customQuery }) => {
    try {
      const resetPasswordResult = await context.$vendure.api.requestPasswordReset({emailAddress: email}, customQuery);
      return {
        ...currentResult,
        resetPasswordResult
      };
    } catch (err) {
      err.message = err?.graphQLErrors?.[0]?.message || err.message;
      throw err?.response?.data?.graphQLErrors?.[0] || err;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNewPassword: async (context: Context, { tokenValue, newPassword, currentResult, customQuery }) => {
    try {
      const setNewPasswordResult = await context.$vendure.api.resetPassword({ tokenValue, newPassword }, customQuery);
      return {
        ...currentResult,
        setNewPasswordResult
      };
    } catch (err) {
      err.message = err?.graphQLErrors?.[0]?.message || err.message;
      throw err?.response?.data?.graphQLErrors?.[0] || err;
    }
  }
};

const useForgotPassword: () => UseForgotPassword<ForgotPasswordResult> = useForgotPasswordFactory<ForgotPasswordResult>(useForgotPasswordFactoryParams);

export {
  useForgotPassword,
  useForgotPasswordFactoryParams
};
