// == allows coercion => only values should be same, types no need to same
// === doesn't allow coercion => both values and types should be same

let a = '4'
let b = '4'
let c = 4

console.log( a == b)    //true 
console.log( a == c)    //true
console.log( a === b)   //true
console.log( b === c)   //false

let x = ''
let y = false
let z = 0
console.log(x == y)     //true
console.log(y == z)     //true
console.log(x === y)    //false
console.log(y === z)    //false