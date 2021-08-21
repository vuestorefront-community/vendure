import gql from 'graphql-tag';

export default gql`
  query eligibleShippingMethods {
    eligibleShippingMethods {
        id
        price
        priceWithTax
        code
        name
        description
        metadata
    }
  }
`;
