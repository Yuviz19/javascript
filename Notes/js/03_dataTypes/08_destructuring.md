# Destructuring 

- aka unpacking arrays or objects into a bunch of variables

## Array Destructuring 

```js
let arr = ["John", "Smith"];
let [firstname, lastname] = arr;

let [firstname, lastname] = "John Smith".split(' ');
```
- this is just copying of elements
- you can also ignore some elements using the commas

```js
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// Julius Consul
```

- it works with any iterator on the right side

- the rest operator (...)
  - in the above example the last value is discarded 
  - this can be avoidee

```js
let [name1 = "Unknown", name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array containing the last elements (the ones that were not captured)
// the above is also an example of giving "default" values
```

## Object Destructuring

- basic syntax -> let {var1, var2} = {var1:…, var2:…}

```js
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
```

- setting the source and target property

```js
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title
```
- again default values can be provided (same as in array)

- here the ...rest property throws an object with the rest of source attributes

### Nested Destructuring

```js
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
```
