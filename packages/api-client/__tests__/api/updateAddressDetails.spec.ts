import updateAddressDetails from '../../src/api/updateAddressDetails';
import setOrderBillingAddressMutation from './../../src/api/updateAddressDetails/setOrderBillingAddressMutation';
import setOrderShippingAddressMutation from './../../src/api/updateAddressDetails/setOrderShippingAddressMutation';
import { Context } from '../../src/types';
import { BILLING_TYPE } from '../../src/helpers/constants';

describe('[vendure-api-client] updateAddressDetails', () => {
  it('updates shipping details', async () => {
    const givenVariables = {
      input: {
        fullName: 'Eliot Anderson',
        company: 'F Society',
        streetLine1: '1st Avenue',
        streetLine2: '1st Avenue',
        city: 'New York',
        province: 'New York',
        postalCode: '34-234',
        countryCode: 'US',
        phoneNumber: '123123123',
        defaultShippingAddress: true,
        defaultBillingAddress: false
      }
    };

    const context = ({
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(setOrderShippingAddressMutation);

          return { data: 'update shipping details response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown) as Context;

    const { data } = await updateAddressDetails(context, { input: givenVariables.input });

    const expectedShippingDetails = 'update shipping details response';

    expect(data).toBe(expectedShippingDetails);
  });

  it('updates billing details', async () => {
    const givenVariables = {
      input: {
        fullName: 'Eliot Anderson',
        company: 'F Society',
        streetLine1: '1st Avenue',
        streetLine2: '1st Avenue',
        city: 'New York',
        province: 'New York',
        postalCode: '34-234',
        countryCode: 'US',
        phoneNumber: '123123123',
        defaultShippingAddress: false,
        defaultBillingAddress: true
      }
    };

    const context = ({
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(setOrderBillingAddressMutation);

          return { data: 'update billing details response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown) as Context;

    const { data } = await updateAddressDetails(context, { input: givenVariables.input, type: BILLING_TYPE });

    const expectedBillingDetails = 'update billing details response';

    expect(data).toBe(expectedBillingDetails);
  });
});
