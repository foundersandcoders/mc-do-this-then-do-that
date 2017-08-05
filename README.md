# A gentle introduction to asynchronous programming in javascript

**Okay, things don't always happen staight away.**

## Reading / Motivational writing

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

## Tasks
  1. Read the files excercise/exercise_1.js, test/exercise_1.test.js
  2. Complete the functions in exercise_1 to pass the tests
  3. Run the tests with the command `npm run test_1` (You will need to run `npm i` first)

## Error first callbacks
As you have seen in exercise 1, we are our functions either return a result, or return an error. Within node, async javascript there is a convention for handling async errors.

We could do
```js
var doubleAsync = function(x, callback) {
  if (typeof x !== 'number') {
    callback(new Error('need a number'))
  } else {
    callback(x * 2)
  }
}
```

Instead we do
```js
var doubleAsync = function(x, callback) {
  if (typeof x !== 'number') {
    callback(new Error('need a number'))
  } else {
    callback(null, x * 2)
  }
}
```
ie, we always use the first argument for the callback for an error. If there is no error, we pass null as the first argument.

## Tasks
  1. Read the files excercise/exercise_2.js, test/exercise_2.test.js
  2. Read the solutions to exercise 1, your solution for the second exercise should mirror the structure of exercise 1 solutions (but async!)
  3. Read through the solution to exercise 2
  4. Raise issues again this repo with feedback, pull requests welcome :heart:
