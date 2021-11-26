import gql from 'graphql-tag';

export default gql`
  query getRelatedProducts($input: SearchInput!) {
    search(input: $input) {
      items {
        sku
        slug
        productId
        productName
        productAsset {
          preview
        }
        price {
          ... on PriceRange {
            min
            max
          }
        }
      }
    }
  }
`;
