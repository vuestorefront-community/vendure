import gql from 'graphql-tag';
import { AddressFragment } from '../../fragments';

export default gql`
  ${AddressFragment}

  query GetActiveCustomer {
    activeCustomer {
      id
      firstName
      lastName
      emailAddress
      phoneNumber
      orders {
        items {
          id
          updatedAt
          code
          state
          currencyCode
          total
        }
        totalItems
      }
      addresses {
        ...CustomerAddress
      }
    }
  }
`;
