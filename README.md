# get-cors-origin

get-cors-origin parses any value into a cors configuration if possible.

## Status

| Category         | Status                                                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/get-cors-origin)](https://www.npmjs.com/package/get-cors-origin)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/get-cors-origin)                                                                                        |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/get-cors-origin)                                                                                    |
| Build            | [![CircleCI](https://img.shields.io/circleci/build/github/thenativeweb/get-cors-origin)](https://circleci.com/gh/thenativeweb/get-cors-origin/tree/master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/get-cors-origin)                                                                              |

## Installation

```shell
$ npm install get-cors-origin
```

## Quick start

First you need to add a reference to get-cors-origin to your application:

```javascript
const { getCorsOrigin } = require('get-cors-origin');
```

If you use TypeScript, use the following code instead:

```typescript
import { getCorsOrigin } from 'get-cors-origin';
```

Then you can call the `getCorsOrigin` function to parse any value into a configuration suitable for the [cors](https://www.npmjs.com/package/cors) module if possible:

-   If you provide `false` as parameter, you just get `false` back and cors will be disabled by the middleware.
-   If you provide a `*` as parameter, you just get `*` back.
-   If you provide one or more domains as parameters, you get an array of domains back.
-   If you provide a domain as a string that contains a regular expression, the string is converted to a regular expression.
-   If you provide anything else, an error will be thrown.

Additionally, any whitespace is removed:

```javascript
const corsOrigin = getCorsOrigin(false);
// => false

const corsOrigin = getCorsOrigin('*');
// => '*'

const corsOrigin = getCorsOrigin('http://www.thenativeweb.io');
// => [
//      'http://www.thenativeweb.io'
//    ]

const corsOrigin = getCorsOrigin([
  'http://www.thenativeweb.io',
  'http://www.example.com'
]);
// => [
//      'http://www.thenativeweb.io'
//      'http://www.example.com'
//    ]

const corsOrigin = getCorsOrigin([
  'http://www.thenativeweb.io',
  '/\\.thenativeweb\\.io$/'
]);
// => [
//      'http://www.thenativeweb.io'
//      /\.thenativeweb\.io$/
//    ]

const corsOrigin = getCorsOrigin([
  ' http://www.thenativeweb.io   ',
  '  /\\.thenativeweb\\.io$/  '
]);
// => [
//      'http://www.thenativeweb.io'
//      /\.thenativeweb\.io$/
//    ]

const corsOrigin = getCorsOrigin(true);
// => error

const corsOrigin = getCorsOrigin(123);
// => error
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
