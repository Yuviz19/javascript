# What is Recursion?

- recursion is a pattern where a function calls itself
- example of pow() function that multiplies a number n times
- there are 2 methods 
  - iterative (using a for loop)
  - recursive

```js
function pow(x, n) {
  if (n == 1) {
    return x; // <-- The Base Case
  } else {
    return x * pow(x, n - 1); // <-- The Recursive Step
  }
}

console.log(pow(2, 3)); // Output: 8
```

## Execution Context

- js internally keeps the track of 
  - the exact line, the code is running
  - the current variables 
- when a function makes a nested call, js
  - pauses the current function
  - saves the execution context into a execution stack (aka call stack)
  - executes the nested call

## Visualisation

- eg. pow(2, 3) is called 
- the stack holds -> 
  Context: { x: 2, n: 3, line: 5 }
- now pow(2,2) is called
  Context: { x: 2, n: 2, line: 5 } 
  Context: { x: 2, n: 3, line: 5 }
- now pow(2,1) is called
  - we hit the base case - this simply returns 2
  - now the stack is unwinded one by one and the context is distroyed

## The Limitation: Stack Overflow

- js has a strict limit on how deep this stack can go (usually 100000 nested calls)
- after this the engine throws a ran out of memory error
  - "RangeError: Maximum call stack size exceeded" (aka stack overflow)
