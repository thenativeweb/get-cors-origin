import assert from 'assertthat';
import looksLikeARegex from '../../lib/looksLikeARegex';

suite('looksLikeARegex', (): void => {
  test('returns true if value starts and ends with a slash.', async (): Promise<void> => {
    assert.that(looksLikeARegex('/abc/')).is.true();
  });

  test('returns true if a value only consists of two slashes.', async (): Promise<void> => {
    assert.that(looksLikeARegex('//')).is.true();
  });

  test('returns false if value does not start with a slash.', async (): Promise<void> => {
    assert.that(looksLikeARegex('abc/')).is.false();
  });

  test('returns false if value does not end with a slash.', async (): Promise<void> => {
    assert.that(looksLikeARegex('/abc')).is.false();
  });
});
