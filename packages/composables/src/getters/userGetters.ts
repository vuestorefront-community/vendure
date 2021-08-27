import { UserGetters } from '@vue-storefront/core';
import type { Customer } from '@vue-storefront/vendure-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(user: Customer): string {
  return user?.firstName || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(user: Customer): string {
  return user?.lastName || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFullName(user: Customer): string {
  return `${user?.firstName} ${user?.lastName}` || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmailAddress(user: Customer): string {
  return user?.emailAddress || '';
}

export const userGetters: UserGetters<Customer> = {
  getFirstName,
  getLastName,
  getFullName,
  getEmailAddress
};
