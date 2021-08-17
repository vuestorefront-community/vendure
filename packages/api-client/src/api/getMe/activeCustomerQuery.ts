import gql from 'graphql-tag';

export default gql`
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
    }
  }
`;
