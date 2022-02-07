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
          ... on SinglePrice {
            value
          }
        }
        priceWithTax {
          ... on PriceRange {
            min
          }
          ... on SinglePrice {
            value
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
