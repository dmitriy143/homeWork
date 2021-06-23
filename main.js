function sum(a, b, c) {
  return a + b + c
}
function multiply(a, b, c) {
  return a * b * c
}
function dividedBy(a, b, c) {
  return a / b / c
}
function minus(a, b, c) {
  return a - b - c
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function (...args2) {
        return curried(...args, ...args2)
      }
    }
  }
}
console.log(curry(sum)(8)(9)(10))
console.log(curry(multiply)(8)(9)(10))
console.log(curry(dividedBy)(8)(9)(10))
console.log(curry(minus)(8)(9)(10))
