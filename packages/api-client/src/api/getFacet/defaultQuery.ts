import gql from 'graphql-tag';
import { CategoryCollection, RecursiveCollections } from '../../fragments';

export default gql`
  ${CategoryCollection}
  ${RecursiveCollections}

  query search ($input: SearchInput!) {
    search(input: $input) {
      collections {
        collection {
          ...CategoryCollection
          ...RecursiveCollections
        }
      }
      totalItems
      items {
        productId
        slug
        sku
        productVariantId
        collectionIds
        description
        productName
        currencyCode
        productAsset {
          preview
        }
        price {
          ... on PriceRange {
            min
          }
        }
        priceWithTax {
          ... on PriceRange {
            min
          }
        }
      }
      facetValues {
        facetValue {
          id
          name
          code
        }
        count
      }
    }
  }
`;
