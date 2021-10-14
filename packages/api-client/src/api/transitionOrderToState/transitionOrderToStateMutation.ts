import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}

  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...Cart
      ... on OrderStateTransitionError {
        errorCode
        message
        transitionError
        fromState
        toState
      }
    }
  }
`;
