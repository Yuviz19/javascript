> [!NOTE]
> the notes are from the site javascript.info

# Hello World
- using of the alert("Hello World!")
- and some details about the script tag on html.
- JS uses automatic semicolons
- " " are used to shoe the comments

## the modern "use strict"
- "use strict" or 'use strict' is to show that the below code is written in the modern way

```javascript
'use strict'
// now the code works the modern way
```

- for normal usage u can call the 'use strict' inside a function and then write the modern version.
- modern js offer classes and use of modules

# Variables
- named storage for data.
- use to keyword 'let' for creating a new variable.
- in older codebases 'var' is also used.
- declaration and initialization both are available here.
- declaration twice can lead to error.

- constants - they are variables that can not be changed.
- they are generally denoted with uppercassing

# Data Types

## Number
- represent both integers and floating point Numbers 
- we can do multiple operations on them (+, -, /, *)
- special numeric values - NaN (Not a number) and Infinity (a value greater than any number)
- any operation on NaN result to NaN.

## BigInt
- normal numbers are (2^53 -1 and -(2^53 -1)) but above them, BigInt is used for precision (1.7976931 * 10^308).

## String 
- represented by " ", ' ' or `` (backticks)
- `` are used to provide extended functionality, to allow us to embed variables inside strings with ${...}.

## Boolean
- gives the functionality of true and false.

## null
- 'null' does not belong to any of the data types.
- it means "empty" or "value unknown", (for future use).

## undefined value
- meaning "value not assigned"
- if a variable is declared but not defined its type becomes undefined.

## Objects
- its a special type
- all others are primitive (their values can contain only one thing).
- Objects can store multiple data and more complex entities.
#Symbol - it is used to create a unique identifier for Objects

## "typeof operator"
- this is an operand that returns the type of variable.

```javascript
typeof x // whatever type x would have been
```

# Interactions

1. alert - displays a message in a "modal window" (modal means that the used can not interact with the rest of the page), and waits for the 'ok' button to be pressed.

2. prompt
- accepts 2 args

```javascript
result = prompt(title, [default])
```

- title - the thing to show to the user.
- default - the optional parameter for an initial value in the prompt box.
- if a user does not write anything, then the value of the variable is set to null, even with default.

3. confirm
- syntax

```javascript
result = confirm("question")
```

# Type Conversions
- here we can explicitly convert from one types to another.

1. String conversion
- use String(value) 
- this is mostly obvious.

2. Numeric Conversions
- it mostly happens automatically.
- eg. alert("6"/"2") gives 3, which is numeric.
- let num = Number(str) where str = "an arbitrary number" 
this gives NaN

3. Boolean Conversion
- Boolean(1) true
0 is false
"hello" is true
"" is false
"0" is true
" " is also true .. these do mean not empty.

# Mathematical operations
- The following math operations are supported:
    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.

- String concatenation is also done with +.
- '1' + 2 = 12
   2 + '1' = 21 

- the '+' operator
  - this is used as a binary and an unary form.
  - the unary form is used to do numeric conversions 
  +true is 1
  +"" is false 

## Operator Precedence
- this tells which operator takes place in what order
#NOTE - unary operator always takes place first.
Precedence 	Name 	Sign
… 	… 	…
14 	unary plus 	+
14 	unary negation 	-
13 	exponentiation 	**
12 	multiplication 	*
12 	division 	/
11 	addition 	+
11 	subtraction 	-
… 	… 	…
2 	assignment 	=
… 	… 	…

- JS also supports modification in place 
  - eg += and -= or even *= and /= 
- JS also supports increment and decrement operator
  -- and ++ operator which are nothing but increase and decrease by one.
  - keep the increment and decrement order in mind.. 
  ++counter and counter++ are different things

## Bitwise Operator
- The list of operators:
    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )

## Comma Operator
- evaluates each operand in order (l to r) and return the value of the last operand.

# Comparisons
In JavaScript they are written like this:
  - Greater/less than: a > b, a < b.
  - Greater/less than or equals: a >= b, a <= b.
  - Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
  - Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

- the above expressions give boolean as a result.

## String Comparisons

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

## Strict equality
- '==' has a problem -
- it can not differentiate between false and 0
it is because they are of different types as converted to numbers by == operator.
- hence we use === operator which checks the operands without type conversion.
- null === undefined is false
- but null == undefined is true

- strange quirks of JS
```javascript
alert( null > 0 );  // (1) false converts value to numbers 
alert( null == 0 ); // (2) false for JS null is loosely equal to 0
alert( null >= 0 ); // (3) true now for numeric conversion this becomes true
```

- for undefined all the three statements are false -> this is because the undefined is Number(undefined) => NaN

# If and "?"
- the if statement evaluates a statement in paranthesis and if the condition is true, then the block is executed
- if(...){ ... }
-- The else clause
- with if we may include an optional else block. It executes if the condition is falsy.

- several conditions : else if
- may contain several conditions, and get executed when all above are falsy.

## Conditional Operator '?'
- when we need to assign a variable based on condition.
- syntax
```javascript

let result = (condition) ? value1 : value2;

//eg.
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

## Non-Traditional use of '?'
- it is the replacement for if and else

```javascript
let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

// else
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

# Logical Operators

1. OR ||
--
#NOTE - OR finds the first truthy value.

2. AND && 
--
#NOTE - AND finds the first falsy value

3. NOT !
--

# Nullish coalescing operator "??"
- treats null and undefined similarly
- it returns the first argument if it not null or undefined
The result of a ?? b is:
  - if a is defined, then a,
  - if a isn’t defined, then b.

# Loops
1. while 

```javascript
while(condition) {
  // code
  // so called loop-body
}
```

2. do while

```javascript
do{
  // loop body
} while (condition)
```

3. for loop

```javascript
for (begin; condition; step){
  // loop body
}
```

- begin - if condition true, then run the body
at the end of every iteration, run the step

## breaking the loop
- 'break' is used to force exit a loop

## continuing to the next iteration
- 'continue' is used to break the loop and move to next iteration

## labels for break and continue
- in a situation where we want to break or continue from a nested loop.
- we can name our loops and then operate on them

```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
```

# Switch statements
- switch replaces if blocks

```javascript
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

# Functions
- these are used to perform similar actions in many places of the script.
-- function declaration
```javascript
function name(parameter1, parameter2, ... parameterN) {
 // body
}
```

- local variables - these are variables inside the functions. they are not accessible to outer code.

- a function can access an outer variable and also modify it.
- Parameter - these are arbitrary data that is passed into a functions (aka placeholders)
- argument - these are the actual values that are passed in the function

- a function can have default values for its parameters
```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

## Returning a Value
- a function can return a value back, using return keyword

#NOTE - a function should be small and do exactly that is intended.
- writing comments is also a great practise.

## Function as a value
```javascript
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
```

## Callback function
```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

# Arrow Functions
it is a shorter form of a variable function.
eg. let sum = (a,b) => a + b;

## Multi-line arrow function

```javascript
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
```

# Code Quality

## Debugging in the Browser
- it is the process of finding and fixing errors.
- these tools are present on almost all modern browsers and modern IDEs.
- in chromium based browsers, there is a sources panel that can help as
  - file navigator
  - code editor
- on pressing enter, there we can get a console window and enter to execute.

-- Break points - 
- in the sources code panel, if we click on a line, we activate a breakpoint.
- A breakpoint is a where debugger will automatically pause the JS execution.
  - while the code is paused, we can examine current variables execute commands and get them debugged 

-- the command debugger
- we can also pause the code with 'debugger' command in it.
- as the debugger is working, we can see the following
1. watch - shows current values for variables.
2. call stack - shows nested calls chain.
3. scope - local shows the function variables
         - while the global shows the global variables

-- Tracing the execution
- to trace a script
  - resume (F8) - continue the execution, till the next breakpoint(if any)
  - step (F9) - run the next line/command.
  - step over (F10) - run the next command but not into the next function.
  - step into (F11) - similar to step, but different behaviour for asynchronous functions.
  - step put (shift + F11) - continue the execution and stop it at the very last line.

## Coding style
- code must be clean and easy to read.
- use semicolons in JS.
-- declaration of functions
- JS can work all 3 ways, 
  - declare all functions at the start 
  - declare all functions at the end.
  - or go for a mixed style.

> [!NOTE]
> for style guides refer to google's JS style guide or StandardJS or Idiomatic JS.

-- Linters
- linters are tools that automatically check the style of code and make improvements with suggestions
- this can help reduce bugs.
- some famous ones are JSLint, JSHint and ESLint.

