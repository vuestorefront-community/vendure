import gql from 'graphql-tag';
import { CategoryCollection, RecursiveCollections } from '../../fragments';

export default gql`
  ${CategoryCollection}
  ${RecursiveCollections}

  query collections ($options: CollectionListOptions) {
	  collections (options: $options) {
      totalItems
      items {
        ...CategoryCollection
        ...RecursiveCollections
      }
    }
  }
`;
