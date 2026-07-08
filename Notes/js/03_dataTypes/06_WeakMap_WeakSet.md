# WeakMap & WeakSet

- The Problem with Map and Set
  - if an object is put inside a Map and Set 
  - they stay in computer mamory as long as the collection itself exists

- special collection that is built on Map and Sets 
- the special characteristic is 
  - they do not prevent garbage collection of their keys

## WeakMap

- store only objects as keys
- have weak refernce: if an object is removed from memory, its corresponding value is also removed in weak map
- not ennumerable: can not be looped
  - .keys() , .values() , .entries() or .size() doesn't exists

- set, get, delete, and has function do work

- use case: additional/third party data storage
```js
let messages = new WeakMap();
function trackUser(user) {
  messages.set(user, 10); // user object is the key
}

let void = { name: "void" };

trackUser(void);
// ... later, void logs out or is removed ...

void = null; 
// The object is now automatically wiped from memory, 
// and the WeakMap entry disappears cleanly behind the scenes.
```

## WeakSet

- works on the same principle as weakmap
- all values must be objects
- weak refernces 
- Not Enumerable: No looping, no .size, and no .clear(). You can only use .add(), .has(), and .delete()

- use case: Tagging or Architectural flag
```js
let activeConnections = new WeakSet();

let conn1 = { id: "socket_99" };
let conn2 = { id: "socket_100" };

activeConnections.add(conn1);
activeConnections.add(conn2);

console.log(activeConnections.has(conn1)); // true

// If a connection closes and its reference is dropped:
conn1 = null; 

// activeConnections automatically lets go of it to prevent a leak
```
