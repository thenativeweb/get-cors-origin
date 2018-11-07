'use strict';

const looksLikeARegex = function (value) {
  if (!value) {
    return false;
  }

  return value.startsWith('/') && value.endsWith('/');
};

module.exports = looksLikeARegex;
