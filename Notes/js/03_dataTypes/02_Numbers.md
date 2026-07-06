# Numbers

## More ways to write numbers

```js
let billlion = 1000000000;
let billion_ = 1_000_000_000; // syntactic sugar
let billion__ = 1e9 // 1 followed by 9 zeros or 1 * 1000000000

let num = 1e-6; // 0.000001
```

## Hex, Binary and Octal Numbers

- for hex (x) is used =>
  - 0xff // 255 of decimal

- for Binary
  - 0b11111111 // 255 

- for octal
  - 0o377 // 255

## toString

- u can pass a base
```js
let num = 255;
num.toString() // "255"
num.toString(16) // ff
```

## Rounding

- Math.floor() -> rounds down
- Math.ceil() -> rounds up
- Math.round() -> round to nearest integer
- Math.trunc() -> removes anything after decimal
- num.toFixed(i) -> rounds the number to i number of digits after decimal

## Tests: isFinite(x) and isNaN(x)

- *does what they are intended to do*

## parseInt(x) and parseFloat(x)

- the + and Number() fail if there is any character in the String
- parseInt and parseFloat read a number from a string, untill they can't
- they also take another argument
```js
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
```

## Other Math Functions

- Math.random() -> returns a number b/w 0 and 1
- Math.max(x, y, z) -> returns the max number

- Random Number generation
```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log(getRandomIntInclusive(1, 10)); // Returns a whole number from 1 to 10
// hence inclusive
```

> [!NOTE]
> remove +1, then it becomes exclusive (lower to upper - 1)
> remove ceil and floor functions to get between decimal places too
