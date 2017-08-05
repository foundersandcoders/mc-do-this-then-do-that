// This is more tricky, and for fun, dont worry if it does not make sense. If you are interested, find out what currying in javascript is ...

const waterfall = function(firstTask, ...restTasks) {
  return (...argsWithCb) => {
    const len = argsWithCb.length
    const cb = argsWithCb[len - 1]
    const args = argsWithCb.slice(0, len - 1)

    firstTask(...args, (err, ...results) => {
      if (err) return cb(err)


      if (restTasks.length === 0) return cb(null, ...results)

      waterfall(...restTasks)(...results, cb)
    })
  }
}

const asyncDouble = function(x, cb) {
  setTimeout(() => {
    if (typeof x !== 'number') return cb('can only double numbers')
    cb(null, x*2)
  }, 200)
}

const asyncQuadruple = waterfall(asyncDouble, asyncDouble)

asyncQuadruple(4, (err, result) => {
  console.log('4 * 4 =', result)
})

asyncQuadruple("4", (err, result) => {
  console.log('"4" * "4" gives error:', err)
})

const asyncHalves = function(num, cb) {
  setTimeout(() => {
    cb(null, num / 2, num / 2)
  }, 200)
}

const asyncMult = function(x, y, cb) {
  setTimeout(() => {
    cb(null, x*y)
  }, 200)
}

const asyncHalvesProd = waterfall(asyncHalves, asyncMult)

asyncHalvesProd(10, (err, res) => {
  console.log('(10 / 2) * (10 / 2) =', res)
})
