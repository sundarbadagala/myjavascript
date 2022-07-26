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