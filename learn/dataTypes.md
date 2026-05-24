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

#### Internals
- 
