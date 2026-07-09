# JSON METHODS

- JSON (javascript object notation) is a general format to represent values and objcts
- js provides methods to work with

- it is a file with one root object or an array (so that data is not loose)

1. JSON.stringify to convert objects into json
2. JSON.parse to convert JSON back to object

```js
// 1. A live JavaScript object in your memory
const userProfile = {
  name: "Alex",
  age: 28,
  isAdmin: false
};

// 2. Convert it into a JSON string
const jsonString = JSON.stringify(userProfile);

console.log(jsonString);
// Output: '{"name":"Alex","age":28,"isAdmin":false}'
// (Notice it is now a single string of text wrapped in quotes)
```

```js
// 1. Raw JSON text arriving from a server
const incomingText = '{"city":"Tokyo","temp":22}';

// 2. Convert the text into a usable JavaScript object
const weatherData = JSON.parse(incomingText);

// 3. Now you can use dot-notation to read the properties!
console.log(weatherData.city); // Output: Tokyo
console.log(weatherData.temp); // Output: 22
```
