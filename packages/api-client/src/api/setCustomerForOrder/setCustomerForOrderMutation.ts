import gql from 'graphql-tag';
import { CartFragment, ErrorResultFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  ${ErrorResultFragment}

  mutation setCustomerForOrder($input: CreateCustomerInput!) {
    setCustomerForOrder(input: $input) {
      ...Cart
      ...ErrorResult
    }
  }
`;
