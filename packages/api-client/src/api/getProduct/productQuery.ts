import gql from 'graphql-tag';

export default gql`
  query product ($id: ID, $slug: String) {
    product(id: $id, slug: $slug) {
      slug
      description
      variants {
        id
        sku
        name
        price
        priceWithTax
        currencyCode
        options {
          id
          name
          code
        }
      }
      featuredAsset {
        preview
      }
      assets {
        preview
      }
      collections {
        id
        name
      }
      optionGroups {
        id
        name
        code
        options {
          id
          name
          code
        }
      }
    }
  }
`;
