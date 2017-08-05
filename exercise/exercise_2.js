// example
var asyncAdd = function(x, y, cb) {
  setTimeout(() => {
    // no error in this example,
    // you will need to add an error case for the example below
    cb(null, x + y)
  }, 200)
}

var asyncDivide = function(x, y, cb) {
  setTimeout(() => {
    // TODO: divide the numbers and handle the case where y is zero (see the tests)

    cb() // this callback needs arguments
  }, 200)
}

var asyncDivideByThenAdd = function(x, y, z, cb) {
  setTimeout(() => {
    asyncDivide(x, y, (error, division) => {

      // todo handle the case where divide returns an error

      cb(null, division + z)
    })
  }, 200)
}

module.exports = {
  asyncDivide: asyncDivide,
  asyncDivideByThenAdd: asyncDivideByThenAdd
}
