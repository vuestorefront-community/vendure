import gql from 'graphql-tag';

export default gql`
  mutation deleteCustomerAddress($id: ID!) {
    deleteCustomerAddress(id: $id) {
      success
    }
  }
`;
