# Object Flags and Descriptors

## What is a Property Flag?

- there are some properties that are not actually used often, but can come in handy
- some property flags are -
  - value -> returns the value on console logging
  - writable -> if true, the value can be changed, else not
  - enumerable -> if true, it can appear in for..in loops, or Object.keys()
  - configurable -> If true, the property can be deleted, and its flags (or descriptor type) can be changed.

## What is a Property Descriptor?

- a descriptor is simply an object that packages all the flags together

### Object.getOwnPropertyDescriptor(obj, propertyName)

```js
let user = { name: "John" };

// Let's inspect the descriptor for "name"
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);
// Output: { value: 'John', writable: true, enumerable: true, configurable: true }
```

### Object.defineProperty(obj, propertyName, descriptor)

- Lets you create a new property or modify the flags of an existing one with precise control.

- an example

```js
let car = {};

Object.defineProperty(car, "vinNumber", {
  value: "12345ABCDE",
  writable: false, // Cannot be changed
  enumerable: true,
  configurable: false,
});

car.vinNumber = "99999"; // Throws an error in strict mode, or fails silently otherwise
console.log(car.vinNumber); // 12345ABCDE
```

- this is quite useful, to declare something like a hidden '_id' or '_timestamp'

# Getter and Setter

```js
let user = {
  firstName: "John",
  lastName: "Smith",
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
});

console.log(user.fullName); // John Smith (Calls the getter)

user.fullName = "Alice Cooper";
console.log(user.firstName); // Alice (Calls the setter)
```
