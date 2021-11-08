import deleteCustomerAddress from '../../src/api/deleteCustomerAddress';
import deleteCustomerAddressMutation from '../../src/api/deleteCustomerAddress/deleteCustomerAddressMutation';
import { Context, DeleteCustomerAddress } from '../../src/types';

describe('[vendure-api-client] deleteCustomerAddress', () => {
  it('deletes customer address', async () => {
    const givenVariables: DeleteCustomerAddress = { id: '1' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(deleteCustomerAddressMutation);

          return { data: 'delete customer address' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await deleteCustomerAddress(context, { id: '1'});

    const expectedRemoveFromCart = 'delete customer address';

    expect(data).toBe(expectedRemoveFromCart);
  });
});
