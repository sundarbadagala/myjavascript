const arr1= [1,2,3,4]
const arr2 = arr1

let x = 10
let y = x

//Primitive data types pass by value

x += 1
console.log(x)
console.log(y)

//Stuctural data types pass by reference
arr1.pop()
console.log(arr1)
console.log(arr2)

//Mutable & Immutable

//Primitives are immutable

let str1 = 'HELLO'
//str1[0] = 'D'       //TypeError: Cannot assign to read only property '0' of string 'HELLO'

//Primitives can re-assign (i.e not in const state) but re-assignment is not the same as mutable
str1 = 'WORLD'
console.log(str1)

//Structures contain mutable data
arr1[0] = 10
console.log(arr1)
console.log(arr2)
//Still shares the same reference