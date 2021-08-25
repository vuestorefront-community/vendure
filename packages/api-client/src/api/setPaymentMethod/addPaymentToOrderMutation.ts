import gql from 'graphql-tag';
import { CartFragment, ErrorResultFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  ${ErrorResultFragment}

  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...Cart
      ...ErrorResult
    }
  }
`;
