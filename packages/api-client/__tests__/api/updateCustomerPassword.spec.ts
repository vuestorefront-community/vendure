import updateCustomerPassword from '../../src/api/updateCustomerPassword';
import updateCustomerPasswordMutation from '../../src/api/updateCustomerPassword/updateCustomerPasswordMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] updateCustomerPassword', () => {
  it('updateCustomerPassword', async () => {
    const givenVariables = { currentPassword: 'test1234', newPassword: 'test1234' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(updateCustomerPasswordMutation);

          return { data: 'updateCustomerPassword response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await updateCustomerPassword(context, { currentPassword: 'test1234', newPassword: 'test1234' });

    const expectedUpdateCustomerPassword = 'updateCustomerPassword response';

    expect(data).toBe(expectedUpdateCustomerPassword);
  });
});
