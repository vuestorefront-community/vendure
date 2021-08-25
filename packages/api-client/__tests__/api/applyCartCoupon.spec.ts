import applyCartCoupon from '../../src/api/applyCartCoupon';
import applyCouponCodeMutation from '../../src/api/applyCartCoupon/applyCouponCodeMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] applyCartCoupon', () => {
  it('apply coupon to current cart', async () => {
    const givenVariables = { couponCode: '1'};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(applyCouponCodeMutation);

          return { data: 'apply cart coupon response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await applyCartCoupon(context, { couponCode: '1'});

    const expectedApplyCoupon = 'apply cart coupon response';

    expect(data).toBe(expectedApplyCoupon);
  });
});
