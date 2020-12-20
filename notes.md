# Vanilla js basic command notes :-

`alert()` - This method will popup with a message.

`prompt()` - In this we will get the popup for the user input.

```js
alert("Welcome! to translate");
var name = prompt("Enter your name");
alert("Hey " + name);
```

> Note: Making changes in the html using js is called as DOM-scripting.

## addEventListener():

- For this we need to pass the event and function which we have created!

syntax :

```js
addEventListener(event,function)
```

ex:

```js
addEventListener("click",function)
addEventListener("input",function)
```

## document :

This is an API which is present in the browser

## innerText :

- This an attribute/property of an javascript using we can read the whatever value is written inside the html or to rewrite the text.

> Note: read about `innerText` and `innerHtml`
