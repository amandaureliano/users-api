const AppError = require('../src/helpers/appError');

const fakeMessage = 'You must enter a valid email.';

describe('This test checks the attributes of the AppError object', () => {
  test('Error "message" test', () => {
    const error = new AppError(fakeMessage);
    expect(error.message).toBe(fakeMessage);
  });

  test('Error "statusCode" test', async () => {
    const error = new AppError(fakeMessage);
    expect(error.statusCode).toBe(400);
  });
});
