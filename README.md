# A gentle introduction to asynchronous programming in javascript

**Okay, things don't always happen staight away.**

When you write a javascript program - to run in node or the browser,
it will only do one thing at a time (you can use the phrase single-threaded if you really want).

When other things are happening at the same time as your javascript, it will be something else doing it, only one thing will happen at a time in a normal javascript application.

ie
```js
// Some javascript

var x = 2 // first we do this

var y = x * 2 // then we do this

console.log(y) // finally, we do this
```

Okay, this is all well and good if we want to work out 2 * 2.

The code above is called synchronous code. One thing happens after another,
it is very easy to understand

Sometimes only being able to do one thing at a time is problematic

```js

console.log('Browser javascript file exection started') // do this

document.getElementById('click-me').addEventListener('onClick', function(event) {
  alert('click-me clicked!')
}) // register a click listener

document.getElementById('title').textContent('Do this and then do that') // insert some text

var data = getSomeDataWillTakeAWhile({ filterByFac: true })

document.getElementById('fac-number').textContent = data.facNumber // then lets do something with the data
```

Can you spot the problem?

We know only one thing happens at once in javascript

**Question**: What happens if the user clicks the button while we are gettingSomeDataWillTakeAWhile?

**Answer**: Nothing will happen immediatly, javascript only does one thing at a time :(

**Soltion**:

```js

// solution? Get someone else to do it, we can do other stuff (like handle click events) while we wait

var doThisOnceTheDataHasArrived = function(data) {
  document.getElementById('fac-number').textContent = data.facNumber
}

console.log('Browser javascript file exection started') // do this

document.getElementById('click-me').addEventListener('onClick', function(event) {
  alert('click-me clicked!')
}) // register a click listener

document.getElementById('title').textContent('Do this and then do that') // insert some text

serverPleaseGetSomeDataThen({ filterByFac: true }, doThisOnceTheDataHasArrived)
// When we make an ajax request, the browser takes care of it behind the scenes, and our javascript application can continue to execute or listen of events

```
Woop!

doThisOnceTheDataHasArrived is what we call a callback, we pass it to a functino that is gonna go do something off the scenes, and it will get called with the result once things are done.

Now go to excersise
