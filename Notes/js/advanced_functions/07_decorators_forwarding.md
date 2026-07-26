# Decorator & Forwarding

- in js, decorator is a wrapper function that takes another function
  - alters it or enhances it and returns a newer/ better version

- forwarding is the act of passing args directly through that wrapper to the original function

## Decorator

- Example
  - we have a CPU heavy task that calculates something slowly
  - we create a decorator function that remembers the past result (caches them)

```js
function slow(x) {
  // Imagine a heavy calculation here
  return x * 2; 
}

// The Decorator Function
function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x); // Read from memory if we calculated it before
    }

    let result = func(x); // Otherwise, run the original function
    cache.set(x, result); // Save it for next time
    return result;
  };
}

// Wrap our original function
slow = cachingDecorator(slow);

console.log(slow(5)); // Calculates and returns 10
console.log(slow(5)); // Returns 10 instantly from cache!
```

## The bigger problem of losing this

- a simple decorator works fine with a standalone function
- but it breaks if we try to use it with an object method

```js
let worker = {
  someMethod() { return 2; },
  slow(x) {
    return x * this.someMethod(); // Uses 'this'
  }
};

worker.slow = cachingDecorator(worker.slow); // Wrap it

worker.slow(5); // ❌ Error: Cannot read properties of undefined (reading 'someMethod')
```

#### Why does this break?

- when worker.slow(5) is passed inside the wrapper and the line
- let result = func(x) runs
- func is executed without the dot notation 
- hence the meaning of 'this' is lost

### The Solution 

- to fix this we forward the execution context (this)
- and all passed arguments down to the original function
- to do this js has 2 built-in methods 
  1. func.call
  2. func.apply

- func.call(context, arg1, arg2...)
  - Allows you to call a function, manually specifying what this should point to, followed by arguments separated by commas.

- func.apply(context, argsArray)
  - Does the exact same thing as call, but accepts the arguments as an array-like list. This makes it perfect for forwarding unpredictable dynamic arguments.

- hence the fixed version is

```js
let worker = {
  someMethod() { return 2; },
  slow(x, y) {
    return (x + y) * this.someMethod(); 
  }
};

function universalCachingDecorator(func) {
  let cache = new Map();

  return function(...args) {
    // 1. Create a unique text key out of the multiple arguments
    let key = args.join(','); // Turns the array to a string
                              // eg [3,2] becomes "3,2"

    if (cache.has(key)) {
      return cache.get(key);
    }

    // 2. FORWARDING HAPPENS HERE:
    // We pass the wrapper's current 'this' and the packed array of 'args'
    let result = func.apply(this, args); 

    cache.set(key, result);
    return result;
  };
}

// Wrap the method safely
worker.slow = universalCachingDecorator(worker.slow);

console.log(worker.slow(3, 2)); // Output: 10 (Works perfectly!)
```
- here the apply method let's us pass the context of the object method
