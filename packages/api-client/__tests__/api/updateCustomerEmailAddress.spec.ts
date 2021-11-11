import updateCustomerEmailAddress from '../../src/api/updateCustomerEmailAddress';
import updateCustomerEmailAddressMutation from '../../src/api/updateCustomerEmailAddress/updateCustomerEmailAddressMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] updateCustomerEmailAddress', () => {
  it('updateCustomerEmailAddress', async () => {
    const givenVariables = { newEmailAddress: 'newmail@mail.com', password: 'test1234' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(updateCustomerEmailAddressMutation);

          return { data: 'updateCustomerEmailAddress response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await updateCustomerEmailAddress(context, { newEmail: 'newmail@mail.com', password: 'test1234' });

    const expectedUpdateCustomerEmailAddress = 'updateCustomerEmailAddress response';

    expect(data).toBe(expectedUpdateCustomerEmailAddress);
  });
});
