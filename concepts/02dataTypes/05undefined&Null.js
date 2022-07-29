//undefined is a type, 
//null is an object.

//undefined means the value doesn't exist in compiler
//null is intentional absence of values

//When we define a variable to undefined then we are trying to convey that the variable does not exist . 
//When we define a variable to null then we are trying to convey that the variable is empty.


//if variable is declared but not assigned then will shows undefined
//but null is assignment value, you can assign it to variables

let res
console.log(res)          //undefined
console.log(typeof res)   //undefined

let res2 = null
console.log(res2)         //null
console.log(typeof res2)  //object

//null is equal to undefined but not identical.
console.log(null == undefined)  //true
console.log(null === undefined) //false

let res3 = ''
let res4 = null
let res5
let res6 = "   "

//console.log(res3.length)                    //0
//console.log(res4.length)                    //TypeError: Cannot read property 'length' of null
//console.log(res5.length)                    //TypeError: Cannot read property 'length' of undefined
//console.log(res6.length)                    //3
//console.log(res6.replace(/\s/g,"").length)  //0
