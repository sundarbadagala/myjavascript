//if the condition is correct then first statement will execute otherwise second statement will execute

const a = 8
const b = 0
const c = -10

const res1 = a % 2 === 0 ? 'even' :'odd'

const res2 = b === 0 ? 'zero' : (b %2 === 0 ? 'event' : 'odd')

const res3 = typeof c === 'string' ? 'input is string' : (c > 0 ? 'positive number' : 'negative number') 

console.log(res3)