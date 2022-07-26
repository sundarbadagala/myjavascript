//this keyword which is used in a function, refer to the object it belongs to.
//It makes function reusable by letting you decide the object value
//this value is determined entirely by how a function is called

//Determine 'this'
//01 Implicit Binding
//02 Explicit Binding
//03 New Binding
//04 Default Binding

//=========================================IMPLICIT BINDING============================================

const user1={
    name:'ram',
    age:23,
    details:function(){
        return `user name is ${this.name}, and age is ${this.age}`
    }
}
console.log(user1.details())

//=========================================EXPLICIT BINDING============================================
const user2={
    name:'ram',
    age:23
}

function details(){
    return `user name is ${this.name}, and age is ${this.age}`
}
console.log(details.call(user2))

//=========================================NEW BINDING============================================
function User(name, age){
    this.name = name
    this.age = age
    this.details = `user name is ${this.name}, and age is ${this.age}`
}

const user3 = new User('ram', 23)
const user4 = new User('raj',100)

console.log(user3.details)
console.log(user4.details)

//=========================================DEFAULT BINDING============================================
globalThis.userName = 'ram'
globalThis.age = 72
function userDetails(){
    console.log(`user name is ${globalThis.userName}, and age is ${globalThis.age}`)
}
userDetails()

//=============================================ORDER OF PRECEEDING===============================================
// New > Explicit > Implicit > Default Binding


