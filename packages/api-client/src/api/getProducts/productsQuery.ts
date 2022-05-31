import gql from 'graphql-tag';

export default gql`
  query products ($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        createdAt
        updatedAt
        languageCode
        name
        slug
        description
        featuredAsset {
          id
          name
          preview
        }
        assets {
          id
          name
          preview
        }
        variants {
          name
          id
          price
          priceWithTax
        }
        facetValues {
          id
          name
        }
        translations {
          name
          languageCode
        }
        customFields {
          productSet {
            id
            createdAt
            updatedAt
            languageCode
            name
            slug
            description
            featuredAsset {
              id
              name
              preview
            }
            assets {
              id
              name
              preview
            }
            variants {
              name
              id
              price
              priceWithTax
            }
            facetValues {
              id
              name
            }
            translations {
              name
              languageCode
            }
          }
        }
      }
      totalItems
    }
  }
`;
