# @agadev/AJSON
<a href="https://www.npmjs.com/package/@agadev/ajson" target="_blank"><img src="https://img.shields.io/npm/v/@agadev/ajson?style=for-the-badge&color=%23ff0000&label=%40agadev%2Fajson&logo=npm&style=flat-square"></a>
## AJson implement functions in json

## Imports
### Deno
```js
import AJSON from 'https://agacdn.onrender.com/agadev:ajson';
```
### CommonJS
```js
const AJSON = require('@agadev/ajson');
```
### ECMAScript
```js
import AJSON from '@agadev/ajson';
```

## Example
```js
const math = AJSON.parse('{"sum": "fn:(a,b) => a+b", "sub": "fn:(a,b) => a-b"}');
// math = {
//  sum: (a, b) => a + b;
//  sub: (a, b) => a - b;
//};

const person = AJSON.stringify({
  name: 'pepe',
  say(text){ console.log(text) }
});
// person = '{"name":"pepe","say":"fn:function say (text){ console.log(text); }"}';

const cat = {
  type: 'cat',
  emitSound(){
    console.log('miau')
  }
};
const newCat = AJSON.parse(AJSON.stringfy(cat));
// newCat = {
//  type: 'cat',
//  emitSound(){
//    console.log('miau')
//  }
//};

cat == newCat // false
```
