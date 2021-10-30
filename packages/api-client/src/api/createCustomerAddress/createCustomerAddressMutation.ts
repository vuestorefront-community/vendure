import gql from 'graphql-tag';
import { AddressFragment } from '../../fragments';

export default gql`
  ${AddressFragment}

  mutation createCustomerAddress($input: CreateAddressInput!) {
    createCustomerAddress(input: $input) {
      ...CustomerAddress
    }
  }
`;
