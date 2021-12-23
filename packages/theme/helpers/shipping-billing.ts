import { OrderAddress, Address } from '@vue-storefront/vendure';
import { COUNTRIES } from './constants';

interface AddressForm {
  firstName: string;
  lastName: string;
  streetName: string;
  apartment: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  [key: string]: any;
}

enum AddressType {
  Billing = 'billing',
  Shipping = 'shipping',
}

export const mapAddressFormToOrderAddress = (addressForm: AddressForm): OrderAddress => ({
  fullName: `${addressForm.firstName} ${addressForm.lastName}`,
  streetLine1: `${addressForm.streetName} ${addressForm.apartment || addressForm.streetNumber}`,
  city: addressForm.city,
  postalCode: addressForm.postalCode,
  countryCode: addressForm.country,
  phoneNumber: addressForm.phone,
  province: addressForm.state
});

export const mapOrderAddressToAddressForm = (orderAddress: OrderAddress): AddressForm => {
  const names = orderAddress?.fullName?.split(' ');
  const address = orderAddress?.streetLine1?.split(' ');
  const country = COUNTRIES.find(country => country.label === orderAddress?.country);
  return {
    firstName: names?.length ? names[0] : '',
    lastName: names?.length ? names[1] : '',
    streetName: address?.length ? address[0] : '',
    apartment: address?.length ? address[1] : '',
    city: orderAddress?.city,
    state: '',
    country: country?.key,
    postalCode: orderAddress?.postalCode,
    phone: orderAddress?.phoneNumber
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapAddressFormToAddress = (addressForm: AddressForm, type: AddressType) => {
  if (type === AddressType.Billing) {
    return {
      id: addressForm?.id,
      defaultBillingAddress: Boolean(addressForm?.isDefault),
      ...mapAddressFormToOrderAddress(addressForm)
    };
  } else {
    return {
      id: addressForm?.id,
      defaultShippingAddress: Boolean(addressForm?.isDefault),
      ...mapAddressFormToOrderAddress(addressForm)
    };
  }
};

export const mapAddressToAddressForm = (address: Address, type: AddressType): AddressForm => ({
  id: address?.id,
  firstName: address?.fullName?.split(' ')[0],
  lastName: address?.fullName?.split(' ')[1],
  streetName: address?.streetLine1?.split(' ')[0],
  streetNumber: address?.streetLine1?.split(' ')[1],
  apartment: '',
  city: address?.city,
  state: address?.province,
  postalCode: address?.postalCode,
  country: address?.country?.code,
  phone: address?.phoneNumber,
  isDefault: type === AddressType.Billing ? address?.defaultBillingAddress : address?.defaultShippingAddress
});

export const getCalculatedPrice = (price: number): number => {
  return price ? price / 100 : 0;
};

export const getDefaultAddress = (addresses: Address[], type: AddressType): Address => {
  if (!addresses) return;
  if (type === AddressType.Billing) {
    return addresses.find(address => address.defaultBillingAddress);
  } else {
    return addresses.find(address => address.defaultShippingAddress);
  }
};
