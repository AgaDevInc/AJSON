### @agadev/AJSON
# AJson implement functions in json
## CommonJS
```js
const AJSON = require('@agadev/ajson');

const data = AJSON.parse('{"sum": "fn:(a,b) => a+b", "sub": "fn:(a,b) => a-b"}');
// {
//  sum: (a, b) => a + b;
//  sub: (a, b) => a - b;
//}
```
## ECMAScript
```js
import AJSON from '@agadev/ajson';

const data = AJSON.parse('{"sum": "fn:(a,b) => a+b", "sub": "fn:(a,b) => a-b"}');
// {
//  sum: (a, b) => a + b;
//  sub: (a, b) => a - b;
//}
```
