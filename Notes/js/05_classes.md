# Classes

## Basic Syntax and Structure

```js
class User {
  // 1. Constructor: Initializes new instances
  constructor(name) {
    this.name = name;
  }

  // 2. Class Method: Placed directly on User.prototype
  sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Creating an instance
let user = new User("Void");
user.sayHi(); // "Hello, my name is Void"
```

- when the User is called with the new keyword, a new empty object is created
- the constructor runs automatically to initialize the it's properties
- and all the user functions are then attached to User.prototype
- so

```js
console.log(typeof User); // "function"
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi); // [Function: sayHi]
```

## Class v/s Plain Constructor Function

- Isn't constructor is just a function
  - yes it is, but with some differences

1. [[isConstructor]]: true;

- this is set to true for class constructors

2. Non enumerable methods:

- this means that the functions in the classes cannot be iterated with for..in loops

## Class Fields and Getters/Setters

```js
class Article {
  // Class field: Stored on the INSTANCE, not the prototype
  createdDate = new Date();

  constructor(title) {
    this._title = title;
  }

  // Getter
  get title() {
    return this._title.toUpperCase();
  }

  // Setter
  set title(value) {
    if (value.length < 4) {
      console.log("Title is too short!");
      return;
    }
    this._title = value;
  }
}

let article = new Article("JS Core");
console.log(article.title); // "JS CORE"
```

- a class field is property of the class that is made at the time of creation of the class/object
- a getter is used to get a value from the class
- a setter is used to set a certain value, whenever something is meant to be set inside/outside the class

```js
class User {
  constructor(name) {
    // 2. This assignment triggers the setter below!
    this.name = name;
  }

  set name(value) {
    console.log("Setter executed with value:", value);
    if (value.length < 2) {
      console.log("Name too short!");
      return;
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

// 1. Instantiating with new User
let user = new User("A");
// Output in console:
// "Setter executed with value: A"
// "Name too short!"

console.log(user.name); // undefined (because setter rejected "A")
```

- so what happens here is that
  - any assignment using the '=' is done (either in constructor or outside the class)
  - js looks up weather a setter called name is called or not, hence both calls execute the same setter function

## Class Inheritance (extends and super)

- to inherit from another class we use extends

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
}

// Rabbit inherits from Animal
class Rabbit extends Animal {
  constructor(name, earLength) {
    // CRITICAL: Must call super() before accessing 'this'!
    super(name);
    this.earLength = earLength;
  }

  // Method overriding
  run(speed) {
    super.run(speed); // Call parent method
    console.log(`${this.name} hops quickly!`);
  }
}

let rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(5);
// Output:
// White Rabbit runs with speed 5.
// White Rabbit hops quickly!
```

> [!NOTE]
> the super function must be called inside the constructor of inherited class before using this keyword

- the super keyword generally calls the constructor of the parent class and hence initializes the variables accordingly
- it can also be used to call the methods of the parent class
  - super(..) -> calls the parent constructor
  - super.method(..) -> calls the method of the parent class (works for static methods too)

### Context Lose in Callbacks (in classes)

```js
class Animal {
  stop() {
    console.log(`${this.name} stopped.`);
  }
}

class Rabbit extends Animal {
  stopLater() {
    // USING A REGULAR FUNCTION CALLBACK
    setTimeout(function() {
      super.stop(); // SyntaxError: 'super' keyword unexpected here!
    }, 1000);
  }
}
```

- this happens normal function lose their context when a callback is used
  - this happens because they are not passed with context binding..
  - but using bind, apply or call makes it kinda awkward when using the super keyword.

- so since arrow functions do not have their own context, the super keyword works completely fine.

```js
class Rabbit extends Animal {
  stopLater() {
    // USING AN ARROW FUNCTION
    setTimeout(() => {
      super.stop(); // Works perfectly! It uses stopLater's super.
    }, 1000);
  }
}

let rabbit = new Rabbit();
rabbit.name = "Bugs";
rabbit.stopLater(); // (After 1 second) Output: "Bugs stopped."
```

## Static Methods and Properties

- Static items belong to the class itself, rather than to any individual instance created from it.

```js
class User {
  static planet = "Earth";

  static compare(userA, userB) {
    return userA.age - userB.age;
  }
}

// Access directly on the class
console.log(User.planet); // "Earth"
```

> [!NOTE]
> static properties are not passed down to it's parent's objects when created with the new keyword
> but they are passed down when a class object is made with the extends keyword

## Private Fields and Methods

- these properties can not be accessed/modified outside the class
- they are initialized using # symbol

```js
class CoffeeMachine {
  #waterLimit = 200; // Private property

  #checkWater(amount) {
    // Private method
    if (amount > this.#waterLimit) throw new Error("Too much water");
  }

  makeCoffee() {
    this.#checkWater(150);
    console.log("Coffee is ready!");
  }
}

let machine = new CoffeeMachine();
// machine.#waterLimit = 1000; // SyntaxError: Private field '#waterLimit' must be declared in an enclosing class
machine.makeCoffee(); // "Coffee is ready!"
```

## Checking Instance of

```js
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert(rabbit instanceof Rabbit); // true
```
