'use strict';

var looksLikeARegex = require('./looksLikeARegex');

var getCorsOrigin = function getCorsOrigin(value) {
  if (!value) {
    throw new Error('Value is missing.');
  }

  if (value === '*') {
    return value;
  }

  var values = Array.isArray(value) ? value : [value];
  var origins = values.map(function (origin) {
    origin = origin.trim();

    if (looksLikeARegex(origin)) {
      return new RegExp(origin.slice(1, -1));
    }

    return origin;
  });
  return origins;
};

module.exports = getCorsOrigin;