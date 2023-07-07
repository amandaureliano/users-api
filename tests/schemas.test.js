const createSchema = require('../src/middlewares/schemas');
const requireds = require('../src/helpers/requiredFields');

describe('This test verifies whether the createSchema function successfully creates the schema', () => {
  it('Test to check if the user schema was created', () => {
    expect(() => createSchema('users', requireds.users)).not.toThrow();
  });

  it('Test to check if the login user schema was created', () => {
    expect(() => createSchema('users', requireds.login)).not.toThrow();
  });
});
