import { useUser } from './../../src/composables/useUser';

const context = {
  $vendure: {
    api: {
      getMe: jest.fn(() => ({ data: { activeCustomer: 'customer data' } })),
      login: jest.fn(() => ({ data: { login: 'login data' } })),
      registerCustomerAccount: jest.fn(() => ({
        data: { registerCustomerAccount: 'register customer account data' }
      })),
      logout: jest.fn(() => ({
        data: { logout: 'logout data' }
      }))
    }
  }
};

jest.mock('../../src/factories/', () => ({
  useUserFactory: (params) => () => params
}));

describe('[vendure-composables] useUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads current user', async () => {
    const { load } = useUser() as any;
    const response = await load(context);

    expect(response).toEqual('customer data');
    expect(context.$vendure.api.getMe).toBeCalled();
  });

  it('login', async () => {
    const { logIn } = useUser() as any;
    const response = await logIn(context, { username: 'test', password: 'test' });

    expect(response).toEqual('login data');
    expect(context.$vendure.api.login).toBeCalledWith({ username: 'test', password: 'test' });
  });

  it('register', async () => {
    const { register } = useUser() as any;
    const response = await register(context, { email: 'test', password: 'test', firstName: 'test', lastName: 'test' });

    expect(response).toEqual('register customer account data');
    expect(context.$vendure.api.registerCustomerAccount).toBeCalledWith({ emailAddress: 'test', password: 'test', firstName: 'test', lastName: 'test' });
  });

  it('logout', async () => {
    const { logOut } = useUser() as any;
    await logOut(context);

    expect(context.$vendure.api.logout).toBeCalled();
  });
});
