# Error Handling

- in case of errors, in the script, and this kills the script immediately
- to avoid the dying of the script, we use "try..catch" blocks

- syntax ->

```js
try {
  // code...
} catch (err) {
  // error handling
}
```

- first the code in try block is executed
- if there are no errors, the catch block is skipped
- if an error occurs, the control is sent to catch block (and the rest of try is ignored)

> [!NOTE]
> try..catch only works for runtime errors

> [!NOTE]
> try..catch works synchronously

```js
try {
  setTimeout(function () {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert("won't work");
}
```

- so, when the script runs, a callback is registered,
- and setTimeout tells the browser to run the function after 1000ms
- and the script runs fine, after moving through try..catch block

- after 1000ms
  - the callback runs and an error is encountered, killing the script

- instead async await can be used.

## The Error Object

- at time of error, js creates an error object containing the details of errors
- for built-in errors, there are 2 main properties

1. name -> the name of the error
2. message -> textual message about the error

- there is also one more property, not quite used

3. stack -> current callstack -> a string of information, about the sequence of of nested calls that led to the error

## Throwing Our Own Errors

```js
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  alert(user.name); // no name!
} catch (err) {
  alert("doesn't execute"); // our own error message
}
```

### "throw" Operator

- the "throw" operator generates an error
- syntax -> "throw <error Object>"

- we can throw any type of object in there, (even primitives)
- rather it is recommended to throw Error objects
- some types of error objects are Error, SyntaxError, ReferenceError, TypeError and others.

- hence their syntax ->

```js
et error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

- or we can directly throw new Error(...)
- another technique would be
```

```js
try {
  user = {/*...*/};
} catch (err) {
  if (err instanceof ReferenceError) {
    alert("ReferenceError"); // "ReferenceError" for accessing an undefined variable
  }
}
```

## Try, Catch and Finally

- there is one more code clause that can be added to try..catch block
- "finally", it runs in all cases

```js
try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}
```

## Extension of the Error Class

- Extending the error class lets us create custom errors, we can also edit the name, message and the stack
- basic extension pattern,

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message); // 1. Calls native Error constructor
    this.name = "ValidationError"; // 2. Overrides name property
  }
}

function test() {
  throw new ValidationError("Invalid email address!");
}

try {
  test();
} catch (err) {
  console.log(err.name); // "ValidationError"
  console.log(err.message); // "Invalid email address!"
  console.log(err.stack); // Full stack trace showing where error occurred
}
```

- we can also add custom properties

```js
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super(`No property: ${property}`);
    this.name = this.constructor.name; // we can also avoid this via boilerplate syntax
    // returns the name of the class
    this.property = property; // Custom metadata
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  return user;
}

try {
  readUser('{ "name": "John" }');
} catch (err) {
  if (err instanceof PropertyRequiredError) {
    console.log(`Failed on field: ${err.property}`); // "Failed on field: age"
  }
}
```

- a checklist
  - super(message) -> required (mandatory)
  - this.name -> defaults to "Error", unless provided
