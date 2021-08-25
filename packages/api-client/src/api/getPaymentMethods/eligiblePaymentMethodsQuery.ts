import gql from 'graphql-tag';

export default gql`
  query eligiblePaymentMethods {
    eligiblePaymentMethods {
        id
        code
        name
        description
        isEligible
        eligibilityMessage
    }
  }
`;
