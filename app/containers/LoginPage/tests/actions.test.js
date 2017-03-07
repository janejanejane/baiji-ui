
import {
  changeUsername,
  changePassword,
  submitLoginForm,
} from '../actions';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SUBMIT_FORM,
} from '../constants';

describe('LoginPage actions', () => {
  describe('Submit Form Action', () => {
    it('has a type of SUBMIT_FORM and credentials object', () => {
      const username = 'test';
      const password = 'pass';
      const expected = {
        type: SUBMIT_FORM,
        credentials: {
          username,
          password,
        },
      };

      expect(submitLoginForm({ username, password })).toEqual(expected);
    });
  });

  describe('changeUsername', () => {
    it('should return the correct type and the passed username', () => {
      const fixture = 'test';
      const expectedResult = {
        type: CHANGE_USERNAME,
        username: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });

  describe('changePassword', () => {
    it('should return the correct type and the passed password', () => {
      const fixture = 'pass';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password: fixture,
      };

      expect(changePassword(fixture)).toEqual(expectedResult);
    });
  });
});
