# The Function Object 

- imagining functions as "action Objects"
- some of their key properties are 

1. "name" properties
  - returns the name of the function / variable name they are assigned

```js
function sayHi() { console.log("Hi"); }
console.log(sayHi.name); // Output: sayHi

// Contextual naming works too!
let sayBye = function() {};
console.log(sayBye.name); // Output: sayBye
```
2. "length" property
  - retuns the number of expected parameters

```js
function ask(question, answer, ...options) {}
console.log(ask.length); // Output: 2 (only question and answer count)
```

- adding custom properties

```js
let dog = {};
dog.name = "Fido"; // this is because a function is just another object under the hood
```

```js
function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0; // Attaching a property to the function object! (initial value)
  return counter;
}

let myCounter = makeCounter();
console.log(myCounter()); // 0
console.log(myCounter()); // 1
```
- another example 

```js
unction sayHi() {
  alert("Hi");
  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times
```

- for closure -> it is strictly related to lexical scope
- but here the variable can be accessed outside the function
  - but only with the help of function object

## NFE (Named Function Expression)

- it's simply a function with a name under the hood

```js
// Regular Function Expression
let sayHi = function(who) { console.log(`Hi, ${who}`); };

// Named Function Expression (NFE)
let greet = function funcName(who) { console.log(`Hello, ${who}`); };
```

- now let's say this "greet" variable is set to null
- so if NFE wasnt declared, then the function would have gone too
- but since it has a name attached to it
- the function does not goes away

```js
let welcome = function sayHi(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    // Uses the internal name 'sayHi' to call itself safely!
    sayHi("Guest"); 
  }
};

let citizen = welcome; // Copy the reference
welcome = null;        // Wipe out the original variable!

citizen(); // Output: "Hello, Guest" (It still works!)
```
