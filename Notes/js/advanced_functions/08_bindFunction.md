# Function Binding

- it solves the same problem (losing this context)

## The Problem: Losing 'this'

```js
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// We want to run sayHi after 1 second
setTimeout(user.sayHi, 1000); // ❌ Output: Hello, undefined!
```
- when this function is called from inside the setTimeout, the context of the object method is lost

## Solution - 1 Wrapper Function

```js
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// Wrap it inside an arrow function
setTimeout(() => user.sayHi(), 1000); // ✓ Output: Hello, John!
```
- now the object function is called explicitly from the arrow function
- the problem 
  - what if, during the 1 second delay, the object is changed
  - user = { firstName: "Another User" };

## Solution 2 - The Modern Fix (func.bind())

- func.bind(context) takes the function and permanently locks 'this' keyword to the object

```js
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// Create a bound version of sayHi where 'this' is permanently 'user'
let boundSayHi = user.sayHi.bind(user);

setTimeout(boundSayHi, 1000); // Output: Hello, John!
```
- even if user changes, nothing happens
- because the original context is caught inside the confugaration

## Partial Function (Currying)

- bind doesn't just binds this, it permanently lock downs the arguments 
- this is called Partial Function Application

```js
function mul(a, b) {
  return a * b;
}

// Create a specific 'double' function by locking 'a' to 2
// We pass null for context because 'mul' doesn't use 'this'
let double = mul.bind(null, 2);

console.log(double(3)); // Output: 6  (effectively running mul(2, 3))
console.log(double(5)); // Output: 10 (effectively running mul(2, 5))
```
