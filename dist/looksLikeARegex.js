'use strict';

var looksLikeARegex = function looksLikeARegex(value) {
  if (!value) {
    return false;
  }

  return value.startsWith('/') && value.endsWith('/');
};

module.exports = looksLikeARegex;