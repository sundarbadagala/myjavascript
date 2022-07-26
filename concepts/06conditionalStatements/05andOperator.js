//if the condition is correct then only statement will execute otherwise it will never execute
const a = 17

const res1 = a>10 && 'return this'

const res2 = a < 10 && 'return this'

const res3 = typeof a === 'number' && 'this is number'

console.log(res1)
console.log(res2)
console.log(res3)