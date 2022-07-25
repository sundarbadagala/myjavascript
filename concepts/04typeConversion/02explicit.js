//-------------------------------------TO NUMBER---------------------------------------

//Number(value)
console.log(Number('5'))        //5
console.log(Number('3.14'))     //3.14
console.log(Number(true))       //1
console.log(Number(false))      //0
console.log(Number(''))         //0
console.log(Number('a'))        //NaN
console.log(Number(null))       //0
console.log(Number(undefined))  //NaN

//parseInt(value)
console.log(parseInt('5'))          //5
console.log(parseInt('3.14'))       //3
console.log(parseInt(true))         //NaN
console.log(parseInt(false))        //NaN
console.log(parseInt(''))           //NaN
console.log(parseInt('a'))          //NaN
console.log(parseInt(null))         //NaN
console.log(parseInt(undefined))    //NaN

//parseFloat(value)
console.log(parseFloat('3.14'))
console.log(parseFloat('3'))

//-------------------------------------TO STRING---------------------------------------

//String(value)
console.log(String(3))          //3
console.log(String(true))       //true
console.log(String(null))       //null
console.log(String(undefined))  //undefined

//value.toString()
console.log((3).toString())             //3
console.log((true).toString())          //true
// console.log((null).toString())       //TypeError: Cannot read property 'toString' of null
// console.log((undefined).toString())  //TypeError: Cannot read property 'toString' of undefined
