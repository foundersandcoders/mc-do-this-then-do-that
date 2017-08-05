var test = require('tape')

var exercise = require('../exercise/exercise_2.js')
var asyncDivide = exercise.asyncDivide
var asyncDivideByThenAdd = exercise.asyncDivideByThenAdd

test('exercise 2: asyncDivide', t => {
  t.plan(5)

  t.equal(typeof asyncDivide, 'function', 'asyncDivide is exported as a function')

  asyncDivide(4, 2, (err, result) => {
    t.error(err, 'should be no error if success')
    t.equal(result, 2, 'divides four by two')
  })

  asyncDivide(1, 0, (error, result) => {
    t.error(result, 'should be no result on error')
    t.deepEqual(
      error,
      { isError: true, message: 'cannot divide by zero' },
      'returns correct error on bad input'
    )
  })
})

test('exercise 2: asyncDivideByThenAdd', t => {
  t.plan(5)

  t.equal(
    typeof asyncDivideByThenAdd,
    'function',
    'asyncDivideByThenAdd is exported as a function'
  )

  asyncDivideByThenAdd(10, 2, 3, (error, result) => {
    t.error(error, 'should be no error if success')
    t.equal(result, 8, '10 / 2 + 3 = 8')
  })

  asyncDivideByThenAdd(7, 0, 5, (error, result) => {
    t.error(result, 'should be no result on error')
    t.deepEqual(
      error,
      { isError: true, message: 'cannot divide by zero' },
      'handles errors from bad division'
    )
  })
})
