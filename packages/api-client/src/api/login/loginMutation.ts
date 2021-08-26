import gql from 'graphql-tag';

export default gql`
    mutation login($username: string, $password: string, $rememberMe: boolean) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ...on CurrentUser {
                id
                identifier
            }
        }
    }
`;
