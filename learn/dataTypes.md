# Data Types

## Methods of Primitives
- as of Primitives, there are 7 types - 
  1. string
  2. number
  3. bigint
  4. boolean
  5. symbol
  6. null
  7. undefined

- but as of objects, it is capable of storing multiple properties.

## A Primitive as an Object
- primitives are still primitive, a single value
- but the language allows access to methods and properties of primitives.
- to use them, a special wrapper is used to provide extra functionalities.
- the JS engine, highly optimizes this process.
  - it may even skip the creation of new objects for this.

1. NUMBERS
- regular numbers in JS are in 64-bit format (double precision floating point)
- representation
  - let billion = 1_000_000_000;
  - let billion = 1e9 1 and 9 zeros;
  - alert(7.3e9) // 7.3 billion

  - eX means *10 x X zeros
  - same as 1e-6 is 6 zeros before decimal
  - hex, binary and octal are supported
    - 0x___ for hex
    - 0b___ for binary
    - 0o___ for octal

- toString(base) - returns a string representation of num.
  - it can have a base, 2,8,10 and 16.

- rounding
  - Math.floor - round down
  - Math.ceil - round up
  - Math.round - round to nearest integer
  - Math.trunc - (not supported by IE)
    - removes anything after decimal

- toFixed()
  - rounds the number to n digits after point.

- isFinite()
  - returns true if a number is not NaN/Infinity/-Infinity

- isNaN()
  - returns true if a number is above.

- parseInt and parseFloat
  - if the conversion is done using + or Number(), then something like "100px" becomes NaN,
  - but using parseInt, it would return 100.
  - if the number is 100.4px, then Int gives - 100 and Float - 100.4

- Math.random() - givs a random number from 0 to 1 (!= 1)
- for random number between min and max
  - Math.floor(Math.random() * (max - min + 1)) + min;

- Math.max(list) - gives the max out of list
*same for Math.min()*

- Math.pow(1,10) -- 1^10

2. STRING
- an advantage of backticks 
```javascript
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines
```

### Special Character
- some common special Characters are
  - \n new line (for windows - \r\n)
  - \r new line for non-windows is just \n
  ..etc

- to represent a quote in string, use different quote or use \` 

- String.length
  - returns the length of the string
  - #NOTE -> special Characters count as one Character

- Accessing Characters
  1. use something like an array [pos]
  2. use str.at(pos) 
    - provide pos = -x to get the elements from the last.

- Strings are Immutable
  - strings can't be changed in JS.
  - every time a new string object is made

```javascript
let str = 'Hi';
str = 'h' + str[1]; // replace the string
alert( str ); // hi
```

- changing the case
  1. toUpperCase() - all in Upper Case
  2. toLowerCase() - all in Lower Case

- searching for a substring
  - str.indexOf(substr, pos) - looks for a substr in str starting from pos 
  - and returns the position where the match was found or -1.
#NOTE - this is case sensitive

- str.includes() - returns true or false
- str.startsWith() - ---"---
- str.endsWith() - ---"--- 

- getting a substring
  - str.slice(start, end) - returns a string from start to end.
  - if only one given - start (default)

  - str.substring(start, end) - returns a string same as above, but allows start to be greater than end.

  - str.substr(start, length) - returns the part of the string from the start point to the length.

- string comparing
  - strings are compared Character by Character generally with (UTF-16)
  - #NOTE - all Characters in UTF-16, have some specific numeric code
  - we can see those code with 
    - string.codePointAt(0) 
  - and to know what number corresponds to what Character, 
    - 'String.fromCodePoint(char)'

  - correct comparing
    - a complex algo is used to compare the chars from different languages
    - this is now based on international ECMA-402
    - syntax - 
      'str1.localeCompare(str2)'

3. ARRAYS
- they are used to store ordered collections
- Declaration 
  - let arr = new Array();
    arr = [];
  
  - let fruits = ["Apple", "Orange", "Plum"];

  - fruits.length = 3
  - an array can store values of any types, even mix value

  - to get an element, use -> fruits.at(-1) // Plum

#### Methods
- a queue is the most common use of an array.
- it has the following tasks
  - push - appends an element to the end of an array
  - shift - get an element form the beginning and make the 2nd become the 1st

- another use case of array is stack
  - push - adds element to the end
  - pop - takes an element from the end.
- unshift - used to add an element to the start of an array.

-- Internals
- the [] syntax direcly comes from the object syntax,
  - same as obj[key]

-- Performance Quirks
- methods push/pop run fast while shift/unshift are slower.

-- Loops
- one of the oldest way is using a for loop
- but for Arrays "for...of" can be used
```javascript
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits){
  alert(fruit);
}
```

- technically for...in loop also works (coz its an object)
- but iterates all over the properties

-- length of array
- this value updates everytime the object is updated.

-- creation of new Array
let arr = new Array("Apple", "Pear", "Plum");

-- multi-dimensional array
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array
```

- think of this like an array inside an array

- toString - used to change an array to string

#NOTE - don't compare arrays with ==, because they are objects.

### Array Methods
- splice
  - syntax - arr.splice(start, deleteCount, elem1,.... elemN)
  - removes deleteCount number of elements from start and insert elemN at their place.
  - #NOTE - it returns an array, so we need to catch it in a variable
  - u can also insert elements from a specific position by making 
  'deleteCount = 0'

- slice 
  - syntax - arr.slice(start, end)
  - - returns a new array, copying from arr, from start to end (end not included)

- concat
  - syntax - arr.concat(arr1, arr2,...)
  - returns a new array concatenating the other ones.

-- Iterate 'forEach'
- syntax
arr.forEach(function(item, index, array){  });

- Searching in an array
   - arr.indexOf and arr.includes do essentially the same thing,
   - #NOTE that the .indexOf uses strict === for comparison
   - arr.lastIndexOf() does the same thing as .indexOf, but from right to left.
   
   - find and findIndex/findLastIndex
    - if we have an array of objects, to find an object with a specific condition.
    ```javascript
    let result = arr.find(function(item, index, array) {
      // if true is returned, item is returned and iteration is stopped
      // for falsy scenario returns undefined
    });

    - #NOTE - index is used to represent the current posittion of an element
      - this is just normal counting, 1 to N elements 

    let users = [
      {id: 1, name: "John"},
      {id: 2, name: "Pete"},
      {id: 3, name: "Mary"}
    ];
    let user = users.find(item => item.id == 1);
    alert(user.name); // John
    ```

- filter - the find method looks for a single first element for a true condition.
  - while arr.filter() returns all the objects that are true.
  - same syntax as find

```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

-- Transforming an Array
- map - arr.map, calls a function for each element of the array and returns the array of the results.
- arr.map(function(item,index,array){  });

- arr.sort()
  - this returns a sorted array
  
```javascript
let arr = new Array(1, 2, 15);
arr.sort();

alert(arr) // 1, 15, 2 -> this is because the .sort() sorts items as strings.
```

- use arr.sort(compareNumeric), for treating the items as numbers.
  - the sort method sorts items on the basis of quicksort or timsort 

  - for strings use localeCompare

```javascript
let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
```

-- reverse - reverses a currently existing array

-- split - used to split strings into an array
  - str.split(<content to split from>)

-- join - does the reverse of split

-- reduce and reduceRignt
  - they are used to calculate a single value based on the array.
```javascript
let value = arr.reduce((accumulator, item, index, array)=>{ ... , init_value});
```

- accumulator - gives the first value (equal to init_value)
- item - it is the current array item
- index - it is the position
- array - it is the array

- most array methods also accept an additional argument 'thisArg', except sort()
