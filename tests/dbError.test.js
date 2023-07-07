const DbError = require('../src/helpers/dbError');

const errorsObj = {
  23505: 'Unique constraint violation error (code 23505): The operation failed because it violated a unique constraint in the database. Please ensure that the data being inserted or updated does not violate any unique constraints defined in the database.',
};

const fakeError = {
  code: 23505,
};

describe('This test checks the attributes of the DbError object', () => {
  test('Error "message" test', () => {
    const error = new DbError(fakeError);
    expect(error.message).toBe(errorsObj[23505]);
  });

  test('Error "statusCode" test', async () => {
    const error = new DbError(fakeError);
    expect(error.statusCode).toBe(400);
  });
});
