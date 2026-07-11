# Variable Scope and Closure

## Lexical Environment

- in js every code block {...}, and the script has a hidden object called lexical env.
- it has two parts 
1. ENV RECORD - object that stores all local variables and this as properties 
2. OUTER REFERNCES - a pointer linking to outer LE

- so when a variable is asked 
  - current LE object is checked and if not found like a ladder outer consequetive objects are checked

## Closure

- a closure is a function that remembers it's outer variables and can access them 

```js
function makeCounter() {
  let count = 0; // Lives inside makeCounter's Lexical Environment
  return function() {
    return count++; // Looks out to the parent environment to change 'count'
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

- now let's say we create another variable called counter2 from the function
- this new function starts fresh (counter from 0)

## The DeadZone

- standard code blocks like if statements, for blocks also have their lexical envs

```js
let phrase = "Hello";

if (true) {
  let user = "John";
  console.log(`${phrase}, ${user}`); // "Hello, John" (Climbs up to find 'phrase')
}

console.log(user); // Error: user is not defined!
```
