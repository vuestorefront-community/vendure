import gql from 'graphql-tag';

export default gql`
    mutation login($username: String!, $password: String!, $rememberMe: Boolean) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ...on CurrentUser {
                id
                identifier
            }
            ... on InvalidCredentialsError {
                errorCode
                message
                authenticationError
            }
            ... on NotVerifiedError {
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
