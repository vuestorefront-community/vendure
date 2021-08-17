import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}

  mutation removeCouponCode($couponCode: String!) {
    removeCouponCode(couponCode: $couponCode) {
      ...Cart
    }
  }
`;
