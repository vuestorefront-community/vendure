import gql from 'graphql-tag';

export default gql`
  query collections {
	collections{
      totalItems
      items {
        id
        createdAt
        updatedAt
        languageCode
        name
        breadcrumbs {
          id
          name
          slug
        }
        description
        position
        slug
        featuredAsset {
          id
          name
        }
        assets {
          id
          name
        }
        parent {
          id
          name
        }
        children {
          id
          name
        }
        filters {
          code
        }
        translations {
          id
          createdAt
          updatedAt
          languageCode
          name
          slug
          description
        }
        productVariants {
          items {
            id
            name
            sku
          }
          totalItems
        }
        customFields
      }
    }
  }
`;
