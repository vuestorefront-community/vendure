import gql from 'graphql-tag';
import { CartFragment, ErrorResultFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  ${ErrorResultFragment}

  mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
      ...Cart
      ...ErrorResult
    }
  }
`;
