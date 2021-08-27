import registerCustomerAccount from '../../src/api/registerCustomerAccount';
import registerCustomerAccountMutation from '../../src/api/registerCustomerAccount/registerCustomerAccountMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] registerCustomerAccount', () => {
  it('register customer account', async () => {
    const givenVariables = { input: { emailAddress: 'john.doe@gmail.com' }};

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(registerCustomerAccountMutation);

          return { data: 'register customer account response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await registerCustomerAccount(context, { emailAddress: 'john.doe@gmail.com' });

    const expectedRegisterCustomerAccount = 'register customer account response';

    expect(data).toBe(expectedRegisterCustomerAccount);
  });
});
