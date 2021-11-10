import { useUser } from './../../src/composables/useUser';

const context = {
  $vendure: {
    api: {
      getActiveCustomer: jest.fn(() => ({ data: { activeCustomer: 'customer data' } })),
      login: jest.fn(() => ({ data: { login: 'login data' } })),
      registerCustomerAccount: jest.fn(() => ({
        data: { registerCustomerAccount: 'register customer account data' }
      })),
      logout: jest.fn(() => ({
        data: { logout: 'logout data' }
      })),
      updateCustomerEmailAddress: jest.fn(() => ({
        data: { updateCustomerEmailAddress: 'updated email data'}
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
    expect(context.$vendure.api.getActiveCustomer).toBeCalled();
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

  it('update email address', async () => {
    const { updateEmail } = useUser() as any;
    const response = await updateEmail(context, { newEmail: 'test@mail.com', password: 'test' });

    expect(response).toEqual('updated email data');
    expect(context.$vendure.api.updateCustomerEmailAddress).toBeCalledWith({ newEmail: 'test@mail.com', password: 'test' });
  });

});
