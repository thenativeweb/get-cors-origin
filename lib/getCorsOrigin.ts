import { looksLikeARegex } from './looksLikeARegex';

const getCorsOrigin = function (value: string | string[]): string | (string | RegExp)[] {
  if (value === '*') {
    return value;
  }

  const values = Array.isArray(value) ? value : [ value ];

  const origins = values.map((origin): string | RegExp => {
    const updatedOrigin = origin.trim();

    if (looksLikeARegex(updatedOrigin)) {
      return new RegExp(updatedOrigin.slice(1, -1), 'u');
    }

    return updatedOrigin;
  });

  return origins;
};

export { getCorsOrigin };
