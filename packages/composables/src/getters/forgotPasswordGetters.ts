import { ForgotPasswordGetters } from '@vue-storefront/core';
import { CurrentUser } from '@vue-storefront/vendure-api';
import { ForgotPasswordResult } from '../types';

// The getter is not used in Vendure implementation
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getResetPasswordToken = (result: ForgotPasswordResult) => result?.resetPasswordResult as any;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isPasswordChanged = (result: ForgotPasswordResult) => Boolean((result?.setNewPasswordResult?.data?.resetPassword as CurrentUser).id);

const forgotPasswordGetters: ForgotPasswordGetters<ForgotPasswordResult> = {
  getResetPasswordToken,
  isPasswordChanged
};

export default forgotPasswordGetters;
