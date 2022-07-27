const person={
    name : 'viraj',
}
globalThis.age=89


function user1(){
    return `name is ${this.name}`
}
//console.log(user1())              //TypeError: Cannot read property 'name' of undefined
//console.log(user1.call(person))   //name is viraj

function user2(){
    return `name is ${globalThis.name}`
}
//console.log(user2())              //name is undefined
//console.log(user2.call(person))   //name is undefined

function user3(){
    return `age is ${this.age}`
}
//console.log(user3.call(person))   //age is undefined

function user4(){
    return `age is ${globalThis.age}`
}
//console.log(user4())              //age is 89
//console.log(user4.call(person))   //age is 89

function user5(){
    return `
    name = ${this.name}, 
    global name = ${globalThis.name},
    age = ${this.age}, 
    global age = ${globalThis.age}
    `
}

console.log(user5.call(person))  
// name = viraj, 
//global name = undefined,
//age = undefined, 
//global age = 89