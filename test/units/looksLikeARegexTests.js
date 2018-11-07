'use strict';

const assert = require('assertthat');

const looksLikeARegex = require('../../src/looksLikeARegex');

suite('looksLikeARegex', () => {
  test('is a function.', async () => {
    assert.that(looksLikeARegex).is.ofType('function');
  });

  test('returns false if value is missing.', async () => {
    assert.that(looksLikeARegex()).is.false();
  });

  test('returns true if value starts and ends with a slash.', async () => {
    assert.that(looksLikeARegex('/abc/')).is.true();
  });

  test('returns true if a value only consists of two slashes.', async () => {
    assert.that(looksLikeARegex('//')).is.true();
  });

  test('returns false if value does not start with a slash.', async () => {
    assert.that(looksLikeARegex('abc/')).is.false();
  });

  test('returns false if value does not end with a slash.', async () => {
    assert.that(looksLikeARegex('/abc')).is.false();
  });
});
