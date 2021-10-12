import gql from 'graphql-tag';

export default gql`
  query getMe {
    me {
      id,
      identifier,
      channels {
        id
      }
    }
  }
`;
