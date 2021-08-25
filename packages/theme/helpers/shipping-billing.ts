import { OrderAddress } from '~/../api-client/lib';
import { COUNTRIES } from './constants';

interface AddressForm {
  firstName: string,
  lastName: string,
  streetName: string,
  apartment: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
  phone: string
}

export const mapAddressFormToOrderAddress = (addressForm: AddressForm): OrderAddress => ({
  fullName: `${addressForm.firstName} ${addressForm.lastName}`,
  streetLine1: `${addressForm.streetName} ${addressForm.apartment}`,
  city: addressForm.city,
  postalCode: addressForm.postalCode,
  countryCode: addressForm.country,
  phoneNumber: addressForm.phone
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

export const getCalculatedPrice = (price: number): number => {
  return price ? price / 100 : 0;
};
