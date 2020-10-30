import { assert } from 'assertthat';
import { CustomError } from 'defekt';
import { getCorsOrigin } from '../../lib/getCorsOrigin';

suite('getCorsOrigin', (): void => {
  test(`returns '*' if '*' is given.`, async (): Promise<void> => {
    assert.that(getCorsOrigin('*')).is.equalTo('*');
  });

  test('returns an array with multiple items if multiple values are given.', async (): Promise<void> => {
    assert.that(getCorsOrigin([ 'http://www.thenativeweb.io', 'http://www.example.com' ])).is.equalTo([
      'http://www.thenativeweb.io',
      'http://www.example.com'
    ]);
  });

  test('supports regular expressions.', async (): Promise<void> => {
    assert.that(getCorsOrigin([ 'http://www.thenativeweb.io', '/\\.thenativeweb\\.io$/' ])).is.equalTo([
      'http://www.thenativeweb.io',
      /\.thenativeweb\.io$/u
    ]);
  });

  test('trims whitespace.', async (): Promise<void> => {
    assert.that(getCorsOrigin([ ' http://www.thenativeweb.io   ', '  /\\.thenativeweb\\.io$/  ' ])).is.equalTo([
      'http://www.thenativeweb.io',
      /\.thenativeweb\.io$/u
    ]);
  });

  test(`throws an error if a string other than '*' is given.`, async (): Promise<void> => {
    assert.that((): any => getCorsOrigin('http://www.thenativeweb.io')).is.throwing(
      (ex): boolean =>
        (ex as CustomError).code === 'ECORSORIGININVALID' &&
        ex.message === `Not a valid CORS origin value. Please wrap strings other than '*' in an array.` &&
        (ex as CustomError).data === 'http://www.thenativeweb.io'
    );
  });

  test('throws an error if a boolean is given.', async (): Promise<void> => {
    assert.that((): any => getCorsOrigin(false)).is.throwing(
      (ex): boolean =>
        (ex as CustomError).code === 'ECORSORIGININVALID' &&
        ex.message === 'Not a valid CORS origin value.' &&
        (ex as CustomError).data === false
    );
    assert.that((): any => getCorsOrigin(true)).is.throwing(
      (ex): boolean =>
        (ex as CustomError).code === 'ECORSORIGININVALID' &&
        ex.message === 'Not a valid CORS origin value.' &&
        (ex as CustomError).data === true
    );
  });

  test('throws an error if a number is given.', async (): Promise<void> => {
    assert.that((): any => getCorsOrigin(1_337)).is.throwing(
      (ex): boolean =>
        (ex as CustomError).code === 'ECORSORIGININVALID' &&
        ex.message === 'Not a valid CORS origin value.' &&
        (ex as CustomError).data === 1_337
    );
  });

  test('throws an error if an object is given.', async (): Promise<void> => {
    const objectCorsOrigin = { origin: 'http://www.thenativeweb.io' };

    assert.that((): any => getCorsOrigin(objectCorsOrigin)).is.throwing(
      (ex): boolean =>
        (ex as CustomError).code === 'ECORSORIGININVALID' &&
        ex.message === 'Not a valid CORS origin value.' &&
        (ex as CustomError).data === objectCorsOrigin
    );
  });
});
