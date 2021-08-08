import gql from 'graphql-tag';

export default gql`
  query search ($input: SearchInput!) {
    search(input: $input) {
      collections {
        collection {
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
          children {
            id
            name
          }
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
          ... on SinglePrice {
            value
          }
        }
        priceWithTax {
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
      }
    }
  }
`;
