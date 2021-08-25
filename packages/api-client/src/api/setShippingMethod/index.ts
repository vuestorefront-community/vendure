import setOrderShippingMethodMutation from './setOrderShippingMethodMutation';
import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context, SetShippingMethodParams, SetShippingMethodResponse } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers/constants';

const setShippingMethod = async (context: Context, params: SetShippingMethodParams, customQuery?: CustomQuery): Promise<SetShippingMethodResponse> => {
  const setShippingMethodVariables = {
    ...params
  };

  const { setOrderShippingMethod } = context.extendQuery(
    customQuery, { setOrderShippingMethod: { query: setOrderShippingMethodMutation, variables: setShippingMethodVariables } }
  );

  const request = await context.client.mutate({
    mutation: gql`${setOrderShippingMethod.query}`,
    variables: setOrderShippingMethod.variables,
    fetchPolicy: NO_CACHE_FETCH_POLICY
  }) as SetShippingMethodResponse;

  return request;
};

export default setShippingMethod;
