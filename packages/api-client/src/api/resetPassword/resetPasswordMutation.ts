import gql from 'graphql-tag';

export default gql`
  mutation resetPasswordMutation($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password) {
      ... on CurrentUser {
        id
        identifier
        channels {
          id
          token
          code
          permissions
        }
      }
      ... on PasswordResetTokenInvalidError {
        errorCode
        message
      }
      ... on PasswordResetTokenExpiredError {
        errorCode
        message
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
    }
  }
`;
