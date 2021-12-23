import updateCustomerAddress from '../../src/api/updateCustomerAddress';
import updateCustomerAddressMutation from '../../src/api/updateCustomerAddress/updateCustomerAddressMutation';
import { Context, UpdateAddressInput } from '../../src/types';

describe('[vendure-api-client] updateCustomerAddress', () => {
  it('updates customer address', async () => {
    const givenVariables: UpdateAddressInput = { id: '1', streetLine1: 'etstes' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual({ input: givenVariables });
          expect(mutation).toEqual(updateCustomerAddressMutation);

          return { data: 'updates customer address' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await updateCustomerAddress(context, { id: '1', streetLine1: 'etstes' });

    const expectedUpdateCustomer = 'updates customer address';

    expect(data).toBe(expectedUpdateCustomer);
  });
});
