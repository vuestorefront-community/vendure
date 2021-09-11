import { Context, UseForgotPassword, useForgotPasswordFactory, UseForgotPasswordFactoryParams } from '@vue-storefront/core';
import { ForgotPasswordResult } from '../../types';

const useForgotPasswordFactoryParams: UseForgotPasswordFactoryParams<ForgotPasswordResult> = {
  resetPassword: async (context: Context, { email, currentResult, customQuery }) => {
    console.log('Mocked: useForgotPassword.resetPassword');
    return {
      resetPasswordResult: {},
      setNewPasswordResult: {}
    };;
  },
  setNewPassword: async (context: Context, { tokenValue, newPassword, currentResult, customQuery }) => {
    console.log('Mocked: useForgotPassword.setNewPassword');
    return {
      resetPasswordResult: {},
      setNewPasswordResult: {}
    };
  }
};

const useForgotPassword: () => UseForgotPassword<ForgotPasswordResult> = useForgotPasswordFactory<ForgotPasswordResult>(useForgotPasswordFactoryParams);

export {
  useForgotPassword,
  useForgotPasswordFactoryParams
};