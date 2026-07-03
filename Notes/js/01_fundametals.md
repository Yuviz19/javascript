# Fundamentals

## Script

- We can use a <script> tag to add JavaScript code to a page.
- The type and language attributes are not required.
- A script in an external file can be inserted with <script src="path/to/script.js"></script>.

```JavaScript
src="..." type="text/javaScript"
```

## Code Structure

- alert {x}
- comments {x}
- semicolon -> shows the ending of a line
  - a new line also depicts end of the previous line (hence a semicolon is not needed)

## Variables

- a named storage for data
  - to create one, we use 'let' keyword (can be overwritten)

```javaScript
let message = 'hello';
```

- older scripts used to use 'var' keyword
- constants -> the data that is not supposed to change
  - declared with 'const'

## Data Types

- Number -> represents both integers and floating point numbers
  - 'Infinity', '-Infinity', 'NaN' also belong to this Numbers

- BigInt -> used to represent numbers bigger than (2^53 - 1) and smaller than (-2^53 - 1)
  - using normal numbers can bring precision error
  - use a 'n' at the end of the number to show that its a bigInt

- String -> used to represent a series of characters
  - can be represented with

1. Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks: `Hello`.

- single and double quotes are basically same
- `` bring extended functionality (variable injection)

- Boolean -> has only 2 values -> 'true' and 'false'

- null -> shows reference to a non-existent object (nothing, empty, value unknown)

- undefined -> tells the existence of an object, but the value is not assigned.

- Object -> as others (primitives), can store same data types values, an object can store data of multiple types
  - later discussed with symbols

-- typeof -> this an operator that takes a data and tells its types

- syntax -> typeof x

## Interactions

1. alert -> used to show a message, waits until 'ok' is pressed (alert('hello'))
2. prompt -> used to take in data, data can be captured in a variable or constant (let message = prompt("how are u?"))
3. confirm -> used to in a boolean value (let bool = confirm("are u ok"))

## Type conversions

- string conversion -> any value can be converted to string with "String(value)" function

- numeric conversion -> similar to string Number(value)
  - note

| value         | becomes                                   |
| ------------- | ----------------------------------------- |
| undefined     | NaN                                       |
| null          | 0                                         |
| true or false | 1 or 0                                    |
| string        | number if all numeric characters else NaN |

- boolean conversion
  - use Boolean()

## Basic Operators and Maths

- types of operators => unary, binary (based on how many operands can each take)
  - Addition +,
  - Subtraction -,
  - Multiplication \*,
  - Division /,
  - Remainder %,
  - Exponentiation \*\*.

- use '+' to string concatenation

```javaScript
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21""

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
```

- a unary '+' does the same thing as Number() but shorter (numeric conversion)

- operator precedence -> to avoid confusion, use brackets
- assignment operator (=) - returns a value
- chaining assignment -> a = b = c = 2 + 2 (this rather reduces the readability)

- modify in place -

```js
let n = 5;
n (operator)= numeric_value;
```
- increment/decrement also works in js

- Bitwise Operator
  1. AND (&)
  2. OR (|)
  3. XOR (^)
  4. NOT (-)
  5. LEFT SHIFT (<<)
  6. RIGHT SHIFT (>>)
  7. ZERO-FILL RIGHT SHIFT (>>>)

- comma operator (,)

## Comparisions

- greater than/less than (<,>)
- greater than/less than equal to (<=,>=)
- equals (==) (does type conversion if required, then compares)
- not equals (!=)
- these operators return boolean values

- String comparisions
  - javascript uses 'lexicographical' order to compare strings
  - the algorithm compares the unicode sequence, not the dictionary order

```js
let a = 0; // false
let b = "0"; // true

console.log(a == b) // true
```

- strict equality (===), checks equality without type conversion

- comparision b/w null 'null' and 'undefined'
  - true with (==)
  - false with (===)

## Conditional Branching

1. the if/else statements 
  - standard if/else and else if statements

2. '?' conditional operator
- let result = (condition) ? (condition 1) : (condition 2)
- check the practice 'if_else.js'

## Logical Operators

- OR (||) -> returns the firsa truthy value
- AND (&&) -> return true if all values are true else false (also returns the first falsey value)
- NOT (!) -> used to negate something 
  - also '!!' are used to convert stuff to it boolean equivalent

## Nullish Coalescing Operator (??)

- result of a ?? b is
  - a if a defined 
  - b if a is null/undefined (even if its null or undefined)

## Loops

- while(condition) -> runs the loop while a condition is true
- do{..} while(condition) -> the condition is checked after each iteration of the loop
- for (begin;condition;step){...}

-  breaking the loop -> 'break' is used to break from a loop
- continue to the next iteration -> 'continue' is used to skip the current iteration of the loop

## Switch Statements

- a somewhat replacemnet for if/else statement
```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
- put 2+ cases without anything between them 
case 2:
case 5:
  ... 
- to make it work like or statments

## Functions

```js
function showMessage (from , text : "no text given"){
  // body of the function
}
```
- function declaration
- local variables
- outer variables
- parameters -> the variables that act like a placeholder for a function
  - defualt values can also be added
- arguments -> the actual values that are passed into the function

## Function Expressions

```js
let hello = function () {
  alert("hi")
}

let func = hello; // copy
// hello can be treated as variable now
func()
hello() // here we just copied the reference
```

- function callback -> any function that is passed as an argument of another function
```js
function greet() {
    console.log("Hello");
}
function execute(something) {
    something();
}
execute(greet);
```

- example of asyncHandler ->
```js
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
     Promise
      .resolve(requestHandler(req, res, next))
      .catch(next);
    };
};

// then do stuff like
app.get("/users", asyncHandler(async (req, res) => {
    res.send("Hello");
}));
```
## Arrow function (The basics)

- let func = (arg1, arg2, ..., argN) => expression
- the expression is directly returned if they are not enclosed in {} brackets
- else a return statement must be used

- also note that
  - () => {} here curly braces is the function body
  - () => ({}) paranthesis wrap the object expression and returs the same
