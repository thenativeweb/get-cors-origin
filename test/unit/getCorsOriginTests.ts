import { assert } from 'assertthat';
import { getCorsOrigin } from '../../lib/getCorsOrigin';

suite('getCorsOrigin', (): void => {
  test('returns * if * is given.', async (): Promise<void> => {
    assert.that(getCorsOrigin('*')).is.equalTo('*');
  });

  test('returns an array with one item if a single value is given.', async (): Promise<void> => {
    assert.that(getCorsOrigin('http://www.thenativeweb.io')).is.equalTo([
      'http://www.thenativeweb.io'
    ]);
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
});
