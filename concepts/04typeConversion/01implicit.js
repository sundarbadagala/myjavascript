//implicit conversoin => also known as type coercion where javascript itself will automaticall convert type

console.log('2' + '2')          // 22   => string + string
console.log(2 + '2')            //22    => string + string
console.log('a'+'2')            //a2    => string + string
console.log(true + '2')         //true2 => string + string

console.log('4' - '2')          //2     => number - number
console.log(4 - '2')            //2     => number - number
console.log('a' - '2')          //NaN   => string - string
console.log(true - '2')         //-1    => 1 - 2 

console.log(5 - true)               //4
console.log(5 - false)              //5
console.log('5' - true)             //4
console.log('5' - false)            //5

console.log(5 + true)               //6
console.log(5 + false)              //5
console.log('5' + true)             //5true
console.log('5' + false)            //5false

console.log(5 + null)               //5     => null = 0
console.log('5' + null)             //5null
console.log(5 - null)               //5
console.log('5' - null)             //5

console.log(5 + undefined)               //NaN
console.log('5' + undefined)             //5undefined
console.log(5 - undefined)               //NaN
console.log('5' - undefined)             //NaN




