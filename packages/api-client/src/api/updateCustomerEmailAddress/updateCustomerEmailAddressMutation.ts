import gql from 'graphql-tag';

export default gql`
  mutation requestUpdateCustomerEmailAddress($password: String!, $newEmailAddress: String!) {
    requestUpdateCustomerEmailAddress (password: $password, newEmailAddress: $newEmailAddress) {
      ... on Success {
        success
      }
    }
  }
`;
