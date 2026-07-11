# Scheduling 

## setTimeout

- allows us to run a function once after the interval of time
- syntax

```js
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```
- takes a function or a string of code 
- delay is the time in ms (1000ms = 1sec)
- and args are the arguments that the function can take

```js
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

- wa can also cancel the timeout with clearTimeout(..)

```js
let timerId = setTimeout(....);
clearTimeout(timerId);
```
- u can also set timerId to null to remove the timer

## setInterval

- allows to run a function repeatedly, starting after the time interval and then repeating continously at the interval
- syntax ->

```js
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```
- to stop this interval function, use
  - clearInterval(timerId)

```js
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```
