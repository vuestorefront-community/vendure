import gql from 'graphql-tag';
import { AddressFragment } from '../../fragments';

export default gql`
  ${AddressFragment}

  mutation updateCustomerAddress($input: UpdateAddressInput!) {
    updateCustomerAddress(input: $input) {
      ...CustomerAddress
    }
  }
`;
