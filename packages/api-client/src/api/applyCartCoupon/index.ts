import applyCouponCodeMutation from './applyCouponCodeMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { CartCouponParams, ApplyCouponCodeResponse, Context } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const applyCartCoupon = async (context: Context, params: CartCouponParams, customQuery?: CustomQuery): Promise<ApplyCouponCodeResponse> => {
  const applyCartCouponVariables = {
    ...params
  };

  const { applyCouponCode } = context.extendQuery(
    customQuery, { applyCouponCode: { query: applyCouponCodeMutation, variables: applyCartCouponVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${applyCouponCode.query}`,
    variables: applyCouponCode.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as ApplyCouponCodeResponse;

  return request;
};

export default applyCartCoupon;
