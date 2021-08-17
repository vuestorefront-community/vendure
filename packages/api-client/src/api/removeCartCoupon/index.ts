import removeCouponCodeMutation from './removeCouponCodeMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { CartCouponParams, Context, RemoveCouponCodeResponse } from '../../types';

const removeCartCoupon = async (context: Context, params: CartCouponParams, customQuery?: CustomQuery): Promise<RemoveCouponCodeResponse> => {
  const removeCartCouponVariables = {
    ...params
  };

  const { removeCouponCode } = context.extendQuery(
    customQuery, { removeCouponCode: { query: removeCouponCodeMutation, variables: removeCartCouponVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${removeCouponCode.query}`,
    variables: removeCouponCode.variables,
    fetchPolicy: 'no-cache'
  }) as RemoveCouponCodeResponse;

  return request;
};

export default removeCartCoupon;
