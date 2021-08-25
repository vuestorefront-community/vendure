import gql from 'graphql-tag';

export default gql`
    mutation registerCustomerAccount($input: RegisterCustomerInput!) {
        registerCustomerAccount(input: $input) {
            ... on Success {
                success
            }
            ... on MissingPasswordError {
                errorCode,
                message
            }
            ... on NativeAuthStrategyError {
                errorCode,
                message
            }
        }
    }
`;
