const looksLikeARegex = function (value: string): boolean {
  return value.startsWith('/') && value.endsWith('/');
};

export default looksLikeARegex;
