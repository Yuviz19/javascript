# PROMISE

- common analogy
  - the producer code -> the code that does something, but takes time
  - the consuming code -> the code that wants the result of the producer code, once it is done
  - promise -> a special js object that links the producing and the consuming codes together

- syntax ->

```js
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
});
```

## The Producer

- the function passed to the new Promise is called the executor
- the executor, contains the producing code, that eventually produces the result

- the resolve and reject are callbacks provided by js itself
- our code is only inside the executor function
- when the executor, gets its result, it calls either of the two callbacks

1. resolve(value) - if the job is finished successfully, the value is returned
2. reject(error) - if any error occurs, error is returned

```js
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
```

## The Consumers (then, catch)

1. the .then method

```js
promise.then(
  function (result) {
    /* handle a successful result */
  },
  function (error) {
    /* handle an error */
  },
);
```

- the first, function runs when the promise is resolved
- the second function runs when the promise is not resolved and an error is received

2. the .catch method

- when we are only interested in the errors

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second
```

3. the .finally clause

- it is used as the setup for final cleanup after previous codes are executed
