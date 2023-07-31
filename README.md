# count-true [![npm](https://img.shields.io/npm/v/count-true.svg)](https://www.npmjs.com/package/count-true)
'true' count with an array

# usage

```js
import countTrue from 'count-true'

countTrue([1, 'a', '', false, true]) // 3
countTrue([1, 'a', '', false, true], 3) // true
countTrue([1, 'a', '', false, true], 2) // false
```
