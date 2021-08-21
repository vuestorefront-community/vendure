import { OrderAddress } from "~/../api-client/lib";

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
  phoneNumber: addressForm.phone,
})
