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

## Iterables
- they are objects that are generaliastion of arrays.
- as Arrays, there are other iterable built-in objects, eg. Strings
  - to make other objects iterable
  - we can use Symbol.iterator

-- Strings are iterable
- for..of loops are used for string iteration
```javascript
for (let char of "test") {
  // triggers 4 times: once for each character
  alert( char ); // t, then e, then s, then t
}
```

4. MAP & SET
- Map is a collection of keyed data items, like objects, the only difference is
  map allows keys of any type.
```javascript

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

- some map properties
 - new Map()
 - map.set(key, value)
 - map.get(key)
 - map.has(key) - returns true or false, if key exists or not
 - map.delete(key)
 - map.clear() - removes everything from the map
 - map.size - current element count
- map can also use an object as key

-- Iteration over map
we use 3 methods to iterate over map
- map.values() - returns an iterable for values
- map.keys() - ---"--- keys.

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
```

- besides that map also has a built-in forEach method
syntax - map.forEach((value, key, map)=>{...});

-- Map from objects
```javascript
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

5.5. SET
- it is a collection ("set of values"{without keys}), where each value may occur once.
- set methods
  - new Set()
  - set.add(value)
  - set.delete(value)
  - set.has(value)
  - set.clear()
  - set.size

-- iteration over set
- it can be done with for..of or forEach loop

6. WeakMap & WeakSet

- weak objects hold weak references to objects.
  - if the stuff inside the map/set is removed, the data structure still holds a reference to the object
  - but this is not true for weak entities, they can not prevent garbage collection.

- the sole difference between map and WeakMap is that, for keys weakmap only accepts objects
```javascript
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object
```

- some weakmap methods are - 
  - weakMap.set(key, value)
  - waakMap.get(key)
  - weakMap.delete(key)
  - weakMap.has(key)

-- use case: additional data
- it can be used as weakMap.set(john, "secret documents");

-- use case: caching

6.5. WeakSet 
- weakSet is analogous to set.
- but the only change is that, its weak structure.
```javascript
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
```

7. Object.keys, values and entries

- Object.keys(obj) - returns an array of keys
- Object.values(obj) - returns an array of values
- Object.entries(obj) - returns an array of [key, value] pairs.

## Destructing Assignment
- Destructing Assignment is a special syntax that allows us to unpack arrays or objects into a bunch of variables, as convenient.

### Array Destructing
```javascript
// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
```

- we can make stuff ignore by using commas
- extra arguments are discarded
- default values 
let [name = "Guest", surname = "Anonymous"];

### Object Destructing
```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

- again we can provide the values by providing default values

### Nested Destructing
```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```

## Data and Time

## 1. Creating Date Objects

There are four different ways to instantiate a new date in JavaScript using the `new Date()` constructor:

```javascript
// 1. Current Date and Time (Defaults to your local timezone)
const now = new Date(); 

// 2. From a Date String (YYYY-MM-DD or MM/DD/YYYY)
const specificDate = new Date("2026-05-26"); 

// 3. From Specific Components (Year, Month, Day, Hours, Minutes, Seconds, MS)
// Note: Months are 0-indexed! 0 = January, 4 = May, 11 = December.
const partyTime = new Date(2026, 4, 26, 18, 30, 0); // May 26, 2026, 6:30 PM

// 4. From Timestamp (Milliseconds since Jan 1, 1970)
const fromTimestamp = new Date(1716724800000); 

```
## 2. Getting Data (Getters)

Once you have a date object, you can pull out individual pieces of information using various built-in methods.

| Method | What it Returns | Example Range |
| --- | --- | --- |
| `getFullYear()` | The 4-digit year | `2026` |
| `getMonth()` | The month (**0-indexed**) | `0` to `11` |
| `getDate()` | The day of the month | `1` to `31` |
| `getDay()` | The day of the week (**0 = Sunday**) | `0` to `6` |
| `getHours()` | The hour of the day | `0` to `23` |
| `getMinutes()` | The minutes | `0` to `59` |
| `getSeconds()` | The seconds | `0` to `59` |
| `getTime()` | Milliseconds since the Epoch | A huge number |

```javascript
const today = new Date();
console.log(today.getFullYear()); // e.g., 2026
console.log(today.getDay());      // e.g., 2 (Tuesday)

```

---

## 3. Setting Data (Setters)

Just like you can *get* parts of a date, you can also change (*set*) parts of a date.

```javascript
const deadLine = new Date();

deadLine.setFullYear(2027);
deadLine.setMonth(11); // Move to December
deadLine.setDate(15);  // Move to the 15th

console.log(deadLine); // Dec 15, 2027

```

**Pro-Tip: Auto-Correction feature**
JavaScript date objects are smart. If you set a day to `32` on a month that only has 30 days, JavaScript will automatically roll it over to the next month!

```javascript
const date = new Date(2026, 4, 31); // May 31
date.setDate(32); 
console.log(date); // Automatically becomes June 1st!

```

---

## 4. Formatting Dates as Strings

Printing raw date objects looks ugly. JavaScript gives you a few built-in ways to format them cleanly:

```javascript
const myDate = new Date();

console.log(myDate.toDateString());     // "Tue May 26 2026" (Human-readable date)
console.log(myDate.toTimeString());     // "10:12:51 GMT+0530" (Human-readable time)
console.log(myDate.toISOString());      // "2026-05-26T04:42:51.000Z" (Great for databases)

```

### The Ultimate Formatter: `toLocaleDateString()`

If you want to format dates based on a user's location and language, use `toLocaleDateString()`:

```javascript
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(myDate.toLocaleDateString('en-US', options)); 
// Output: "Tuesday, May 26, 2026"

```

## 5. High-Precision Timestamps & Math

If you just want a quick timestamp right now (without creating a whole new object), or if you want to calculate the difference between two times:

```javascript
// Quick timestamp
const start = Date.now(); 

// ... imagine some code running here ...

const end = Date.now();
const timeElapsed = end - start; // Time in milliseconds
console.log(`That took ${timeElapsed} ms!`);

```
## JSON Methods and toJSON
- to convert a complex object into a string (eg. to send it over a network)
- luckily we have JSON (javascript object notation)

- JSON.stringify - convert Objects to strings
- JSON.parse - convert json string back to object

```javascript
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
```

!> [!NOTE]
> JSON is a data only language-independent specification, JS-specific stuff is skipped by stringify.

```javascript
let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)
```

!> [!NOTE]
> also there should be no circular references
```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON
```

-- Excluding and transforming: replacer
- syntax - let json = JSON.stringify(value, [replacer, space])
  - value - the value that has been passed till now
  - replacer - array property to encode or mapping a function
  - space - amount of space to use for Formatting

.... so on....
