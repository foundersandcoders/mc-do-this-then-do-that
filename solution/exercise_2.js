const asyncDivide = function(x, y, cb) {
  setTimeout(() => {
    if (y === 0) {
      cb({ isError: true, message: 'cannot divide by zero' })
      return
    }

    cb(null, x/y)
  }, 200)
}

const asyncDivideByThenAdd = function(x, y, z, cb) {
  setTimeout(() => {
    asyncDivide(x, y, (error, division) => {
      if (error) {
        cb(error)
        return
      }

      cb(null, division + z)
    })
  }, 200)
}

module.exports = {
  asyncDivide: asyncDivide,
  asyncDivideByThenAdd: asyncDivideByThenAdd
}

// alternatives
// All these diffent styles are valid
const asyncDivide_alt1 = function(x, y, cb) {
  // return ONLY to exit the function, not interested in the value (should be undefined)
  if (y === 0) return cb({ isError: true, message: 'cannot divide by zero' })

  cb(null, x/y)
}

const asyncDivideByThenAdd_alt1 = function(x, y, z, cb) {
  asyncDivide(x, y, (error, division) => {
    // return ONLY to exit the function, not interested in the value (should be undefined)
    if (error) return cb(error)

    cb(null, division + z)
  })
}

const asyncDivide_alt2 = function(x, y, cb) {
  if (y === 0) cb({ isError: true, message: 'cannot divide by zero' })
  else cb(null, x/y)
}

const asyncDivideByThenAdd_alt2 = function(x, y, z, cb) {
  asyncDivide(x, y, (error, division) => {
    if (error) cb(error)
    else cb(null, division + z)
  })
}

// INCORRECT
// Question: What is the problem
const asyncDivide_broken = function(x, y, cb) {
  if (y === 0) cb({ isError: true, message: 'cannot divide by zero' })

  cb(null, x/y)
}

const asyncDivideByThenAdd_broken = function(x, y, z, cb) {
  asyncDivide(x, y, (error, division) => {
    if (error) cb(error)

    cb(null, division + z)
  })
}

// Answer: The callback should not ever be called twice!
