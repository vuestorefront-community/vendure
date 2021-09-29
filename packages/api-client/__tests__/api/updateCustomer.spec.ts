import updateCustomer from '../../src/api/updateCustomer';
import updateCustomerMutation from '../../src/api/updateCustomer/updateCustomerMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] updateCustomer', () => {
  it('updateCustomer', async () => {
    const givenVariables = { firstName: 'test1234', lastName: 'test1234' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual({ input: givenVariables });
          expect(mutation).toEqual(updateCustomerMutation);

          return { data: 'updateCustomer response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await updateCustomer(context, { firstName: 'test1234', lastName: 'test1234' });

    const expectedUpdateCustomer = 'updateCustomer response';

    expect(data).toBe(expectedUpdateCustomer);
  });
});
