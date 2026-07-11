# The New Function Syntax

- Syntax ->

```js
let func = new Function ([arg1, arg2, ...argN], functionBody);
```

## The Closure 

- generally when a function is born, it references the lexical environment from where it was created
- but when a function is created with new syntax, it's [[Environment]] is set not to the lexical scope, rather it is set to global scope

```js
function getFunc() {
  let value = "test";

  // Created with new Function from a string
  let func = new Function('console.log(value)');

  return func;
}

getFunc()(); // Error: value is not defined
```

- this crashes because, when the func function was called, it was called with the new keyword
- now the func becomes a global object
- so it is unable to access the local variable of getFunc
