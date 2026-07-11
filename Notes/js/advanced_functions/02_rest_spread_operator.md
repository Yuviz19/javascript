# Rest and Spread Syntax

# REST SYNTAX

- used to call a function with any number of arguments

```js
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

alert( sumAll(1, 2, 3) ); // 6
```

# SPREAD SYNTAX

- similar syntax to rest operator
- if we try to something like this

```js
let arr = [3, 5, 1];
alert( Math.max(arr) ); // NaN

// rather
alert( Math.max(...arr) ); // 2 more arrays along with extra values can also be added
```
