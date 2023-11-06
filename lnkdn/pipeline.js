const _ = Symbol('placeholder')

const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length && args.every(arg => arg !== _)) {
            return fn.apply(this, args)
        } else {
            return function (...nextArgs) {
                const newArgs = args.map((arg) => (arg === _ ? nextArgs.shift() : arg))
                return curried.apply(this, newArgs.concat(nextArgs))
            }
        }
    }
}

const pipe = (...fns) => {
    return function (input) {
        return fns.reduce((result, fn) => fn(result), input)
    }
}

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const pipiline = pipe(
    curry(add)(2),
    curry(multiply)(3),
    curry(subtract)(_, 5),
    curry(divide)(_, 2)
)

const result = pipiline(10)
console.log(result)