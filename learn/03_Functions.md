- a more details about functions

# Recursion and Stack
- it is a pattern useful in situations where task can be split into several tasks.
- simplify the task and call itself.

eg. Power function
```javascript
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8

// this can be made smaller
function pow(x,n){
  return (n==1) ? x : (x * pow(x,n-1));
}
```

## The execution context and Stack
- the process of execution of a running function is stored in its execution context
- 'execution context' - internal data structure that contains details about the execution of a function
  - here the current variables, the value of 'this' and other internal details.

## Recursive stack
- a recursively defined data structure is a structure that replicates itself in parts.

#### Linked List
- if we want to store an ordered list of objects
- let arr = [obj1, obj2, obj3]

- the linked list element is recursively defined as an object
  - value
  - next -> property referencing the next linked list element

```javascript
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// the two are alternate versions of their selves
// make sure to make the next of the last element null
```

- to add an object u can make a new object
  - make its next as list next's next
  - and the list's next as the same object

# Rest Parameters and Spread Syntax

## Rest Parameters
```javascript
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

!> [!NOTE]
> the rest Parameter should be at the end

#### The "argument" variable
- there is also a special array like object named 'arguments' that contains all arguments by their value
```javascript
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");
```

!> [!NOTE]
> arrow functions do not have 'arguments'

## Spread Syntax
- let say, we want to pass an array into the Math.max() function,
```javascript
let arr = [3,4,5]
alert(Math.max(..arr));
```

- passing an array directly gives NaN.
- u can pass multiple arrays with this as
- ...arr1, ...arr2, 25;

- this spread method can also be used to merge 2+ arrays
- let merged =[0,...arr1, 2,...arr2]; 

- *Spread syntax internally uses iterators to gather element*
- so str = 'hello' to ...str becomes 'h','e','l'...

#### Copy an Array/object
- for arrays 
```javascript
let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
```

- for objects
```javascript
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
```

# Variable scope and closure
- if a variable is declared inside a code block {...}, it's only visible inside the block
- this is also true for if, for, while, and so on..

## Nested Functions
- a function inside another function
```javascript
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}
```

- the inner function access the outer variable and so can return the full name.
- the important thing is that we can return a function too.

```javascript
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```

## Lexical Environment

```javascript
function init(){
  let name = "Mozilla";

  function displayName(){
    console.log(name);
  }

  displayName();
}
init();
```

- anything defined inside a function is not available outside,
- so if a function is defined inside a function, the inner function gets the reachability to the outer function's variable

## Closure

```javascript
function makeFunc(){
  const name = "Mozilla";

  function displayName(){
    alert(name);
  }

  return displayName
}

const myFunc = makeFunc();
myFunc();
```

- so what happens here is that,
  - when we return the inner function (from the outer function), instead of calling it.
  - the context block of the outer function ends, now it doesn't make sense that the inner function still gets the referencing to the outer function variable.
  - this is called closure

- so the memory reference still exists, and all the object references are still stored in the memory

- so here, not only the function is returned, it's complete lexical scope is returned

## Global Object
- the global object provides variables and function that are available anywhere.
  - in a browser it is named window, and for NodeJS, it is called global
  - recently globalThis was added to the language
  - in a browser, global functions and variables are declared 'var' keyword 

```javascript

// make the User global, to let all scripts access it
window.currentUser = {
  name = 'John'
};

alert(currentUser.name);
```

#### Using of Polyfills
- "Polyfills" are a piece of code that provides modern functionality to older web browsers

## Function Object and NFE
- in JS, functions are objects
- they are "callable objects", we can call them, but also treat them like objects

-- the name property
- functions contain a name property as
```javascript
function sayHi(){
  alert("Hi");
}

alert(sayHi.name); // sayHi
```

-- the length property
- this returns the number of functional parameters, that a function can take
```javascript
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```

-- custom Properties
```javascript
function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times
```

## Named Function Expressions (NFE)

- it is a term for function expression that have a name
```javascript
let sayHi = function func(who){
  alert("hello",who);
}
```

- the function is still available to be used as sayHi()
- It's use cases
  - allows to call the function itself, internally
  - its not visible outside the function

```javascript
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)

// this resolves, the changing of the variable later in the outer code
// if this is not used
let welcome = sayHi;
sayHi = null;
welcome() // <- this would break otherwise
```

## The New Function Syntax

```javascript
let func = new Function ({arg1, arg2,...} 'functionBody');
```

## Scheduling: setTimeout and setInterval

- setTimeout - allows to run a function, once after the interval of time, then stops forever
- setInterval - allows to run a function repeatedly, starting after the interval of time. Then repeating after each interval

#### setTimeout 
- syntax
  - let timerId = setTimeout(func|code, [delay], [arg1], [arg2]...)
- delay, by default is set to 0, so it is also called zero delay setTimeout

```javascript
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

- u can use arrow functions too,
    - but always try to pass function and not run it

-- cancelling a timeout
- setTimeout returns a timer identifier "timerId", that we can use to cancel the timer
let timerId = setTimeout(...);
clearTimeout(timerId);

#### setInterval
- let timerId = setInterval(func|code, [delay],[arg1],[arg2]..);
- this makes the code run every delay ms

- u can use a setTimeout, to stop the setInterval after some time
```javascript
/ repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```


