# PROTOTYPES

- Prototypes are mechanism where objects inherit from one another

## Prototypal Inheritance [[Prototype]]

- in js, there is a hidden property, that is either set to null or references other objects
- the property is called Prototype inside [[]], but there are many ways to use it,
- one of them is **proto**

```js
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // this can be defined inside the rabbit object too

// now

alert(rabbit.eats); // true
alert(rabbit.jumps); // true
```

### Prototype Chaining

```js
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)
```

> [!NOTE]
> this **proto** property can also be overwritten

- the use of 'this' operator

> [!NOTE]
> Rule of the thumb
> No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

> [!NOTE]
> Object.keys() -> returns only own's self keys
> but for...in loops loops over both own and inherited keys

- also there is a obj.hasOwnProperty(key) -> returns true if
  - obj has key as it's own property

# F.prototype

- means a regular property named prototype on F.

```js
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert(rabbit.eats); // true
```

- By default, every function has a prototype object containing a constructor property pointing back to the function itself.
- also we can use a constructor property to create a new object using the same constructor as the existing one.

```js
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert(Rabbit.prototype.constructor == Rabbit); // true

// also
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true
```

- so

```js
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");
```

# Native Prototype & Extending Them

- rest later...
