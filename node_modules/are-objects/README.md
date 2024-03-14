# are-objects

Function for check if all values are objects.

## Installation

With the simple command `npm install are-objects`.

## Usage

The function takes any arguments as you want.

Example:

```js
const areObjects = require('are-objects');

areObjects({}, 12, [1, null]); // false
areObjects([], {foo: false}); // true
areObjects(function(){}, String()); // false
```

## Test

You should have installed globaly `jasmine-node` for test this package, then execute `npm run test`.

## License

[MIT](https://github.com/rich-97/req-ajax/blob/master/LICENSE)

