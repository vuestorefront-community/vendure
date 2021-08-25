import transitionOrderToState from '../../src/api/transitionOrderToState';
import transitionOrderToStateMutation from '../../src/api/transitionOrderToState/transitionOrderToStateMutation';
import { Context } from '../../src/types';

describe('[vendure-api-client] transitionOrderToState', () => {
  it('sets payment method for certain order', async () => {
    const givenVariables = { state: 'test' };

    const context = {
      config: {},
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(transitionOrderToStateMutation);

          return { data: 'transition order to state response' };
        }
      },
      extendQuery: (customQuery, args) => args
    } as unknown as Context;

    const { data } = await transitionOrderToState(context, { state: 'test' });

    expect(data).toBe('transition order to state response');
  });
});
