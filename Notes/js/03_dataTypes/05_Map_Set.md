# MAP

- a collection to store key-ed data items (like objects, but the keys can be of any type)

- new Map() – creates the map.
- map.set(key, value) – stores the value by the key.
- map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
- map.has(key) – returns true if the key exists, false otherwise.
- map.delete(key) – removes the element (the key/value pair) by the key.
- map.clear() – removes everything from the map.
- map.size – returns the current element count.

```js
// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
```

## Iteration over Map

- map.keys() - returns an iterable of keys
- map.values() - returns an iterable of values
- map.entries() - return an iterable for entries [key, value]

```js
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

- its builtin forEach loop

```js
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```

## Object.entries

- we can change a plane object to a map

```js
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

## Object.fromEntries

- used to reverse (Map to Object)

```js
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```

# SET

- creates a set of values (without keys), where each value occues just once

## Common methods

- new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- set.add(value) – adds a value, returns the set itself.
- set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
- set.has(value) – returns true if the value exists in the set, otherwise false.
- set.clear() – removes everything from the set.
- set.size – is the elements count.

- we can iterate over set with both for of and forEach loop

```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```
