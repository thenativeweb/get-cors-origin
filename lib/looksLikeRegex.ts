const looksLikeRegex = function (value: string): boolean {
  return value.startsWith('/') && value.endsWith('/');
};

export { looksLikeRegex };
