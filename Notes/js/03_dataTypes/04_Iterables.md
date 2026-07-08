# Iterables

- iterables are objects that allow us to loop over the contents using the for of loop
- they are a generalization of arrays

- let we have an object

```js
let range = {
  from : 1,
  to: 5
}
```
- to make range object iterable 
  - we add a method [Symbol.iterator] (a built in symbol)

```js
let range = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

- when the for..of loop starts, it calls this method once
  - it returns an iterator, an object with method next
- now the loop works with that returned object
  - whenever the for of loop iterates it calls the next function 
  - the result of the next function must have the form 
  - {done: boolean, value: any}
  - where done : true means the loop is finished

- strings and arrays are iterable built-in

- u can call an iterable explicitly
```js
let str = "Hello";
let iterable = str[Symbol.iterator]();

while(true){
  let result = iterable.next();
  if (result.done) break;
  alert(result.value);
}
```

## Iterables and Array-Likes

- array-likes are objects that have indexes and length

```js
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

// still the for of loop gives an error
```

## Array.from

- a universal method to change an iterable or array-like chenges them to an array
- from the above example
```js
let arr = Array.from(arrayLike);
```
- Array.from(arr, mapfn) -> complete syntax
