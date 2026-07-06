# Strings

## Quotes

- already covered

## Special Characters

- \n -> new line
- \', \* , \` -> to print quotes and stars
- \\ -> backslash
- \t -> tab

## String Length

- str.length (not with ()) - returns numeric value

## Accessing Characters

```js
let str = "Hello";
alert(str[0]); // H
alert(str.at(0)); // H

// for last Characters
str[str.length - 1];
str.at(-1)
```

## Strings are immutable

- a string can not be edited, rather it can be replaced
- so everytime editiing asign it back to the string

## Searching for a Substring

```js
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
```

- with the index, we can also assign that from what index to start seaching from
- str.indexof("", 2) // start searching from 2nd index

### includes, startsWith and endsWith

```js
// includes function

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
```

```js
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
```

### substring, substr and slice

- str.slice(start, end) - returns a string from start to end (not including end)
```js
et str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1

alert( str.slice(-4, -1) ); // 'gif'
```
- if no second argument is given, the substring is passed till the end

-----

- str.substring(start end) - returns a substring from start to end (not the end)
- similar to slice, but allows the start to be greater than end
  - in this case the start and the end are just swapped

```js
let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"
```
-----

- str.substr(start, length) -> starting point is as it is, and length tells the number of string characters to be returned

### Comparing Strings

- strings are compared in alphabetical order
- this fails when 'a' > 'Z' (true)
  - this happens because strings in JS are UTF-16
  - to get this value - str.codePointAt(pos) - pos is the index of character in str 
- to get a cheracter from it's numeric code - String.fromCodePoint(code)

- the correct comparasion
```js
alert( 'Österreich'.localeCompare('Zealand') ); // -1
```
- this returns 0 if equivalent
