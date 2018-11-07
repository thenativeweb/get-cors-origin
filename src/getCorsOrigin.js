'use strict';

const looksLikeARegex = require('./looksLikeARegex');

const getCorsOrigin = function (value) {
  if (!value) {
    throw new Error('Value is missing.');
  }

  if (value === '*') {
    return value;
  }

  const values = Array.isArray(value) ? value : [ value ];

  const origins = values.map(origin => {
    origin = origin.trim();

    if (looksLikeARegex(origin)) {
      return new RegExp(origin.slice(1, -1));
    }

    return origin;
  });

  return origins;
};

module.exports = getCorsOrigin;
