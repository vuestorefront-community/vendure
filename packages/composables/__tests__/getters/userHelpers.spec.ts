import { mockedUser } from '../__mocks__';
import { userGetters } from './../../src/getters/userGetters';

describe('[vendure-getters] user getters', () => {
  it('returns email address', () => {
    expect(userGetters.getEmailAddress(mockedUser)).toBe('john.doe@gmail.com');
  });

  it('returns user first name', () => {
    expect(userGetters.getFirstName(mockedUser)).toEqual('John');
  });

  it('returns user last name', () => {
    expect(userGetters.getLastName(mockedUser)).toEqual('Doe');
  });

  it('returns user full name', () => {
    expect(userGetters.getFullName(mockedUser)).toEqual('John Doe');
  });
});
