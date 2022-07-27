const user1 = {
    name:'vijay',
    age:23,
    details: function(){
        return `user name is ${this.name}, age is ${this.age}`
    }
}
console.log(user1.details())    //user name is vijay, age is 23

//==============================================================================================
const user2={
    name:'vivek',
    age:43,
    details:()=>{
        return `user name is ${this.name}, age is ${this.age}`
    }
}
//console.log(user2.details())    //TypeError: Cannot read property 'name' of undefined

//==============================================================================================
const user3 = {
    name:'jam',
    age:98,
    details:details
}
function details(){
    return `user name is ${this.name}, age is ${this.age}`
}
console.log(user3.details())    //user name is jam, age is 98