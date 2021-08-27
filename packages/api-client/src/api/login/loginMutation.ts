import gql from 'graphql-tag';
import { ErrorResultFragment } from '../../fragments';

export default gql`
    ${ErrorResultFragment}

    mutation login($username: String!, $password: String!, $rememberMe: Boolean) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ...on CurrentUser {
                id
                identifier
            }
            ...ErrorResult
            ... on InvalidCredentialsError {
                authenticationError
            }
        }
    }
`;
