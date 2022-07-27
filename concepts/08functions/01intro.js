// function is block of code designed to perform a particular task
//functions are re-usable as they can be defined once and can be called with different values resulting in different results

function hello(){
    return 'hello world'
}
console.log(hello())

function helloUser(user){
    return `hello ${user}`
}
console.log(helloUser('hemanth'))

function sum(a,b){
    return `sum of ${a} and ${b} is ${a+b}`
}
console.log(sum(2,3))

//Types of functions
//01 Function Declaration
//02 Function Expression
//03 Arrow Function
//04 Immediately Invoked Function Expression (IIFE)