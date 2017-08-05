var test = require('tape')

var exercise = require('../exercise/exercise_1.js')

var divide = exercise.divide
var divideByThenAdd = exercise.divideByThenAdd

test('exercise 1: divide', t => {
  t.equal(typeof divide, 'function', 'divide is exported as a function')

  t.equal(divide(4, 2), 2, 'divides four by two')

  t.deepEqual(
    divide(1, 0),
    { isError: true, message: 'cannot divide by zero' },
    'returns correct error on bad input'
  )

  t.end()
})

test('exercise 1: divideByThenAdd', t => {
  t.equal(
    typeof divideByThenAdd,
    'function',
    'divideByThenAdd is exported as a function'
  )

  t.equal(divideByThenAdd(10, 2, 3), 8, '10 / 2 + 3 = 8')
  t.equal(divideByThenAdd(8, 4, 1), 3, '8 / 4 + 1 = 3')

  t.deepEqual(
    divideByThenAdd(7, 0, 5),
    { isError: true, message: 'cannot divide by zero' },
    'handles errors from bad division'
  )

  t.end()
})
