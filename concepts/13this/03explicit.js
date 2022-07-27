const user1={
    name:'vijay',
    age:23
}

function details(){
    return `user name is ${this.name}`
}
const details2=()=>{
    return `user name is ${this.name}`
}

console.log(details.call(user1))        //user name is vijay 
// console.log(details2.call(user1))    //TypeError: Cannot read property 'name' of undefined
