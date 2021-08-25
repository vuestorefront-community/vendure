import gql from 'graphql-tag';
import { CartFragment, ErrorResultFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  ${ErrorResultFragment}

  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...Cart
      ...ErrorResult
    }
  }
`;
