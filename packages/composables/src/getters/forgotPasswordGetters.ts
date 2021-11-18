import { ForgotPasswordGetters } from '@vue-storefront/core';
import { ForgotPasswordResult } from '../types';

// The token is not really fetched here, the getter is not used in Vendure implementation
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getResetPasswordToken = (result: ForgotPasswordResult) => result?.resetPasswordResult?.data?.requestPasswordReset as any;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isPasswordChanged = (result: ForgotPasswordResult) => Boolean(result?.setNewPasswordResult?.data?.resetPassword?.id);

const forgotPasswordGetters: ForgotPasswordGetters<ForgotPasswordResult> = {
  getResetPasswordToken,
  isPasswordChanged
};

export default forgotPasswordGetters;
