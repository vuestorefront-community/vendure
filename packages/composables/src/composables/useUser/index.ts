import {
  Context
} from '@vue-storefront/core';
// TODO: ucomment later when working with use functionality
// import type { User } from '@vue-storefront/vendure-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../../types';
import { useUserFactory, UseUserFactoryParams } from '../../factories';

const params: UseUserFactoryParams<any, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    const response = await context.$vendure.api.getActiveCustomer();

    return response?.data?.activeCustomer;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    await context.$vendure.api.logout();
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    const response = await context.$vendure.api.updateCustomer({ firstName: updatedUserData.firstName, lastName: updatedUserData.lastName });

    return response?.data?.updateCustomer;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context: Context, { email, password, firstName, lastName }) => {
    const response = await context.$vendure.api.registerCustomerAccount({ emailAddress: email, password, firstName, lastName });

    return response?.data?.registerCustomerAccount;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    const response = await context.$vendure.api.login({ username, password });

    if ((response?.data?.login as any).errorCode) throw response?.data?.login;

    return response?.data?.login;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    const response = await context.$vendure.api.updateCustomerPassword({ currentPassword, newPassword });

    return response?.data?.updateCustomerPassword;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateEmail: async (context: Context, { currentUser, updatedUserData, newEmail, password }) => {
    const response = await context.$vendure.api.updateCustomerEmailAddress({ newEmail, password });

    return response?.data?.updateCustomerEmailAddress;
  }
};

export const useUser = useUserFactory<any, UpdateParams, RegisterParams>(params);
