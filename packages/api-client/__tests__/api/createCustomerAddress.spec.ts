import createCustomerAddress from '../../src/api/createCustomerAddress';
import createCustomerAddressMutation from '../../src/api/createCustomerAddress/createCustomerAddressMutation';
import { Context, CreateAddressInput } from '../../src/types';

describe('[vendure-api-client] createCustomerAddress', () => {
  it('creates customer address', async () => {
    const givenVariables: CreateAddressInput = { streetLine1: 'setesr', countryCode: 'PL' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual({ input: givenVariables });
          expect(mutation).toEqual(createCustomerAddressMutation);

          return { data: 'create customer address' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await createCustomerAddress(context, givenVariables);

    expect(data).toBe('create customer address');
  });
});
