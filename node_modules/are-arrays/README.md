# are-arrays

Function for check if all values are arrays.

## Installation

With the simple command `npm install are-arrays`.

## Usage

The function takes any arguments as you want.

Example:

```js
const areArrays = require('are-arrays');

areArrays({}, 12, [1, null]); // false
areArrays([], [1, 33.2]); // true
areArrays(function(){}, String(), []); // false
```

## Test

You should have installed globaly `jasmine-node` for test this package, then execute `npm run test`.

## License

[MIT](https://github.com/rich-97/req-ajax/blob/master/LICENSE)

