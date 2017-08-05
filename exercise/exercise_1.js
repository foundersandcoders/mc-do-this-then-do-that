var divide = function(x, y) {
  // todo divide the numbers and handle the case where y is zero (see the tests)
}

var divideByThenAdd = function(x, y, z) {
  var division = divide(x, y)

  // todo handle the case where divide returns an error

  return division + z
}

module.exports = {
  divide,
  divideByThenAdd
}
