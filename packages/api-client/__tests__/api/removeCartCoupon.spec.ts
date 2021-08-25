import removeCartCoupon from '../../src/api/removeCartCoupon';
import removeCouponCodeMutation from '../../src/api/removeCartCoupon/removeCouponCodeMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] removeCartCoupon', () => {
  it('apply coupon to current cart', async () => {
    const givenVariables = { couponCode: '1'};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(removeCouponCodeMutation);

          return { data: 'remove cart coupon response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await removeCartCoupon(context, { couponCode: '1'});

    const expectedRemoveCartCoupon = 'remove cart coupon response';

    expect(data).toBe(expectedRemoveCartCoupon);
  });
});
