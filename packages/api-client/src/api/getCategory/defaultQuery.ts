import gql from 'graphql-tag';

export default gql`
  query collections ($options: CollectionListOptions) {
	  collections (options: $options) {
      totalItems
      items {
        id
        name
        breadcrumbs {
          name
          slug
        }
        slug
        parent {
          id
          name
        }
      }
    }
  }
`;
