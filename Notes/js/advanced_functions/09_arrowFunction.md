# Arrow Functions (Revisited)

1. Arrow functions have no "this"

```js
let group = {
  title: "Our Class",
  students: ["John", "Alice", "Pete"],

  showList() {
    // An arrow function is born here, inside the showList method
    this.students.forEach((student) =>
      console.log(`${this.title}: ${student}`),
    );
  },
};

group.showList();
// Output:
// Our Class: John
// Our Class: Alice
// Our Class: Pete
```

- here it works because of the outer reference of the arrow function

2. Arrow functions have no "arguments"
