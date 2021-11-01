export const AddressFragment = `
  fragment CustomerAddress on Address {
    id
    createdAt
    updatedAt
    fullName
    company
    streetLine1
    streetLine2
    city
    province
    postalCode
    country {
      name
      code
    }
    phoneNumber
    defaultShippingAddress
    defaultBillingAddress
  }
`;
