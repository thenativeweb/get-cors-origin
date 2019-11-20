import { CorsOrigin } from './CorsOrigin';
import { errors } from './errors';
import { looksLikeARegex } from './looksLikeARegex';

const getCorsOrigin = function (value: any): CorsOrigin {
  if (typeof value === 'string') {
    if (value === '*') {
      return value;
    }

    throw new errors.CorsOriginInvalid(`Not a valid cors origin value. Please wrap strings other than '*' in an array.`, { data: value });
  }

  if (Array.isArray(value)) {
    return value.map((origin): string | RegExp => {
      const trimmedOrigin = origin.trim();

      if (looksLikeARegex(trimmedOrigin)) {
        return new RegExp(trimmedOrigin.slice(1, -1), 'u');
      }

      return trimmedOrigin;
    });
  }

  throw new errors.CorsOriginInvalid('Not a valid cors origin value.', { data: value });
};

export { getCorsOrigin };
