# Objects (The Basics)

## Objects 

- unlike other datatypes (which can store only one type of data), objects can store multiple types of data.

```js
// declaration 
let user = new Object();
let user = {};

// using it requires a key and a value in pair
let user = {
  name : "John",
  age : 30,
  "likes birds" : true // multiword property
}

// checkout
alert(user.age) // 30

// update
user.isAdmin = true;

// delete
delete user.age;

// using multiword properties 
alert(user["likes birds"]) // can be used with single words too
```

### Computed Properties

```js
let fruit = prompt("Which fruit to buy?", "Apple");
let bag = {
  [fruit] : 5
}
```

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

-> Property name limitations
  - we can use the object keywords "for, let, return etc.." can be used as the keys for objects

-- "in" operator
- syntax => "key" in Object

```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
```

- "for in.." loop
```js 
for (key in object){...}
```
- if the keys in an object are all integers, then on looping through the keys, 
- we get all the integers in sorted order
```js
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
// adding a '+' sign fixes this
```

## References and Copying

- generally creating two variables (one original and the other its copy, two different memory references are created)
- this is not the case of objects
```js
let user = {
  name : "John"
}

let admin = user;
// these two variables point to a single memory address

alert(user == admin) // true, instances of same objects
alert(admin === user) // true

let a = {}
let b = {}

alert(a == b) // false
```

- now changing any fields among these two, changes the memory references and hence both objects change

> [!NOTE]
> const objects can be modified

### Cloning and Merging

- One way is to use a "for in" loop
- another method is Object.assign(dest, ...sources)
  - dest is the target object 
  - and further are list of sources of objects

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```
- so for cloning 
```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```

- this is good until we get an object that has nested objects 
```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
```
- the result is from the copied object
- hence we use a structuredClone function, used for deep cloning
- let clone = structuredClone(user)

## Garbage Collection

- garbage collection is done automatically and invisible to us

-- The concept of Reachability
- reachable values are those, which are accessible or usable somehow. 
- They are guaranteed to be stores in memory
- Basic garbage collection algorithm follows "mark and sweep" 
  - takes the roots, remembers them
  - then visits all references from them
  - all objects are remembered, so as not to visit the same nodes twice
  - all other objects are removed that are not marked

## Object Methods "this"

- functions in objects (aka methods), are used to show the action of the object
```js
let user = {
  name : "John",
  age: 30,
  sayHi (){
    alert(`Hello ${this.name}`)
  }
}
```
- the value of 'this' is evaluated at the run time, depending on the context
- arrow functions do not have 'this' keyword

## Constructor, Operator "new"

- to create many similar objects, we can use the "new" keyword

```js
// define the Constructor
function User(username, email){
  this.username = username,
  this.email = email,
  this.isOnline = false
}

// creata new user
const user1 = new User("Alice", "alice@example.com")
```

- the same can be done with constructor function
- refer to "01_objects.js" for examples

## Optional Chaining "?"

- the non-existing property
```js
let user = {}
alert(user.address.street) // error
```

- Optional Chaining
```js
const userWithoutAddress = {
  name: "Alice",
  profile: {}
};

//  SAFE: Returns undefined instead of crashing!
console.log(userWithoutAddress.profile.address?.city);
```
- so if address exists, it moves forward to city
- if not then stop and return undefined

- user.greet?.()
  - checks if greet method exists, if yes then run it
  - if not return undefined

- user?.[key] -> checks of user object exists exists, if yes return it's value of key

## Symbol Types

- only a string and a symbol can be used as keys of objects
  - the only problem is that with a string stuff can be overwritten
- creates a unique, immutable (unchangable) value, often created with a symbol descriptor
- no two symbols are ever same
```js
let id1 = Symbol("id");
let id2 = Symbol("id");
```
- to get the description of a symbol variable
- id1.description -> return id

- NOTE - to use symbol inside an object literal, use the property name with [] brackets
```js
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};
```

- NOTE -> symbols are skipped in "for in" loops
- Object.keys(user) also ignores them
- in contrast Object.assign({}, user) copies the symbol property

### What is the Global Registry

- to use the exact the same symbol, we refer to the global registry
- Symbol.for()
```js
const a = Symbol.for("id");
const b = Symbol.for("id");

console.log(a === b); // true
```
- both a and b refer to the same symbol object

- Symbol.keyFor()
```js
const s = Symbol.for("id");

console.log(Symbol.keyFor(s)); // id (only works for global registry)
```
