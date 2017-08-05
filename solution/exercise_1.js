var divide = function(x, y) {
  if (y === 0) return { isError: true, message: 'cannot divide by zero' }

  return x / y
}

var divideByThenAdd = function(x, y, z) {
  var division = divide(x, y)

  if (division.isError) return division

  return division + z
}

module.exports = {
  divide,
  divideByThenAdd
}
