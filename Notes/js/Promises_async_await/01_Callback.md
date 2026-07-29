# Promises & async/await

## Using a Callback

- asynchronous code -> actions/code that is initiated at that same instance, but they finish later
- example - the setTimeout function

- another example of this could be

```js
function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}
```

- now if we do

> // load and execute the script at the given path
> loadScript('/my/script.js');

- this load up is asynchronous, as it may take time to download and run the script
- but any code below it, would not wait for the script to download

- hence we can try using a callback function

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script); // onload -> a js method that only runs when the script is done loading

  document.head.append(script);
}

loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction(); // so now it works
  ...
});
```

- in a similar way, we can load multiple scripts

```js
loadScript("/my/script.js", function (script) {
  loadScript("/my/script2.js", function (script) {
    loadScript("/my/script3.js", function (script) {
      // ...continue after all scripts are loaded
    });
  });
}); // just calling multiple functions, onw by onw.
```

### Handling Errors

- to handle errors

```js
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// and then
loadScript("/my/script.js", function (error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});
```

- if the onload method works, the value of error becomes null, hence running the else block
- if any error occurs (eg download fail, or network error)
  - then the error is passed and processed

- but this method of coding does not proves viable for long lists of scripts
  - including multiple if else statements is not at all a good practice
  - hence this is called the "Pyramid of DOOM"
