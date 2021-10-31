import { UserShippingGetters } from '@vue-storefront/core';
import type {
  Address,
  UserShippingAddressItem as AddressItem,
  UserShippingAddressSearchCriteria
} from '@vue-storefront/vendure-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAddresses(shipping: Address[], criteria?: UserShippingAddressSearchCriteria): AddressItem[] {
  return shipping;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDefault(shipping: Address[]): Address {
  return shipping?.find(address => address?.defaultShippingAddress);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotal(shipping: Address[]): number {
  return shipping?.length;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPostCode(address: Address): string {
  return address?.postalCode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetName(address: Address): string {
  return address?.streetLine1?.split(' ')[0];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetNumber(address: Address): string | number {
  return address?.streetLine1?.split(' ')[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCity(address: Address): string {
  return address?.city;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(address: Address): string {
  return address?.fullName?.split(' ')[0];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(address: Address): string {
  return address?.fullName?.split(' ')[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCountry(address: Address): string {
  return address?.country?.name;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPhone(address: Address): string {
  return address?.phoneNumber;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmail(address: Address): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProvince(address: Address): string {
  return address?.province;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCompanyName(address: Address): string {
  return address?.company;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTaxNumber(address: Address): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(address: Address): string {
  return address?.id;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getApartmentNumber(address: Address): string | number {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isDefault(address: Address): boolean {
  return address?.defaultShippingAddress;
}

export const userShippingGetters: UserShippingGetters<Address[], AddressItem> = {
  getAddresses,
  getDefault,
  getTotal,
  getPostCode,
  getStreetName,
  getStreetNumber,
  getCity,
  getFirstName,
  getLastName,
  getCountry,
  getPhone,
  getEmail,
  getProvince,
  getCompanyName,
  getTaxNumber,
  getId,
  getApartmentNumber,
  isDefault
};
