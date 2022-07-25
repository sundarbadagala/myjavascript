// it represents logical entities and can have only two values are true and false 

const isPrimaryNumber = true
const isAvailable = false 

console.log('2 -> ',Boolean(2))                     //true
console.log('0 -> ',Boolean(0))                     //false
console.log('-2 -> ',Boolean(-2))                   //true
console.log('a -> ',Boolean('a'))                   //true
console.log('empty string -> ',Boolean(''))         //false
console.log('2 > 3 -> ',Boolean(2 > 3))             //false
console.log('2 < 3 -> ',Boolean(2 < 3))             //true
console.log('null -> ',Boolean(null))               //false
console.log('undefined -> ',Boolean(undefined))     //false
