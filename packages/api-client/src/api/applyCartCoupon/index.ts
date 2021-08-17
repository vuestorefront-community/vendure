import applyCouponCodeMutation from './applyCouponCodeMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { ApplyCartCouponParams, ApplyCouponCodeResponse, Context } from '../../types';

const applyCartCoupon = async (context: Context, params: ApplyCartCouponParams, customQuery?: CustomQuery): Promise<ApplyCouponCodeResponse> => {
  const applyCartCouponVariables = {
    ...params
  };

  const { applyCouponCode } = context.extendQuery(
    customQuery, { applyCouponCode: { query: applyCouponCodeMutation, variables: applyCartCouponVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${applyCouponCode.query}`,
    variables: applyCouponCode.variables,
    fetchPolicy: 'no-cache'
  }) as ApplyCouponCodeResponse;

  return request;
};

export default applyCartCoupon;
