# get-cors-origin

get-cors-origin transforms an array of strings into a cors configuration.

## Installation

```shell
$ npm install get-cors-origin
```

## Quick start

First you need to integrate get-cors-origin into your application:

```javascript
const getCorsOrigin = require('get-cors-origin');
```

Then you can call the `getCorsOrigin` function to transform an array of strings into a configuration suitable for the [cors](https://www.npmjs.com/package/cors) module:

- If you provide a `*` as parameter, you just get `*` back.
- If you provide one or more domains as parameters, you get an array of domains back.
- If you provide a domain as a string that contains a regular expression, the string is converted to a regular expression.

Additionally, any whitespace is removed:

```javascript
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
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2018 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
