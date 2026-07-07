# Arrays

- it is used to store ordered collection of data
- arrays are objects in js where the keys are automatically managed with numeric indices

```js
let arr = new Array();
let arr = [1, 2, 3, 4];

alert(arr[1]) // 2

// can store mix of values
let a = et arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
```
- priniting just arr, gives all the values comma , separated
- arr.lenght -> returns the lenght of array
- arr.at(1) == same as arr[1]

## Methods push/pop and shift/unshift

- these implements an array like a queue
1. push -> appends an element to the end
2. shift -> gets an element from the beginnning, then advances the queue
3. pop -> takes an element from the end
4. unshift -> add an element to the beginning of the arrey (push's first)

## Loops

- for loops work for arrays 
- a specialized loop 'for of' loop also exists for arrays

```js
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
```

## The Length method

- the length does not actually returns the lenght of array

```js
let fruits = []
fruits[123] = "banana"

fruits.lenght // => 124
```

## Multidimensional array

- think of them like an array inside an array

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2
```

## toString

- they have their own implementation of toString

```js
let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
```

## Don't Compare arrays with '=='

- just like objects, they contain a reference of memory, arrays do the same
- they return false, until and unless created from the same reference

# Array Methods

1. add/remove items
  - push
  - pop
  - shift 
  - unshift

2. splice
- arr.splice(start, deleteCount, elem1, elem2,... elemN)
- so starting from the start index, remove the deleteCount number of elements, and then append elemX at their places
- note that negative indices are allowed

```js
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
```

3. slice
- a much simpler version of splice
- arr.slice(start, end)
- returns a new array with items from index start to end (not including end)
  - note -> both can be negative

```js
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
```

4. concat
- arr.concat(arg1, arg2, .... argN)
- returns a new array that includes values from other arrays and additional items

```js
let arr = [1, 2];
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```
- concatinating an object in an array
- generally

```js
let arr = [1, 2];
let arrayLike = {
  0: "something",
  length: 1
};
alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```

- but if the object has a special property

```js
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,something,else
```

## Iterate: forEach

- arr.forEach method lets to run a function for each element of the array

```js
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
```

## Searching in an Array

1. indexOf/lastIndexOf and includes  
- arr.indexOf(item, from) -> looks for item starting from index from, otherwise -1 is returned 
- arr.includes(item, from) -> looks for item from 'from' and returns true if found
- arr.lastIndexOf(item) -> same as indexOf(), but starts from right to left

2. find and findIndex/findLastIndex
- arr.find(), calls a function for each element

```js
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
```

- arr.findIndex/findLastIndex have the same syntax, but rather return the index from the start/back of the array

3. filer
- syntax is similar to find, but this returns an array of all matching elements

```js
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
```

## Transform an Array

1. map
- it calls a function for each element and returns the array result

```js
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

2. sort(fn)
- arr.sort()
- sorts the array in increasing order and this is done on the basis of aphabetical order
- to avoid this we provide a custom function

```js
function compareNumeric(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

let arr = [1, 2, 14];

arr.sort(compareNumeric)
```
```js
arr.sort((a,b)=> a-b);
```
```js
let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a.localeCompare(b) ) );
```

3. arr.reverse()
- reverses an array from the current state

4. split and join

```js
let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
```

```js
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using ;
alert( str ); // Bilbo;Gandalf;Nazgul
```

5. reduce/reduceRight
- they are intricate functions that calculate a single value based on the array

```js
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```
- accumulator - result of the previous function call
  - equals to intial the first time
- item - is the current array item 
- index - is it's position 
- array - is the array

```js
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
```
