class person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.details = `user name is ${this.name}, age is ${this.age}`
    }
}

function person2(name, age){             //This constructor function may be converted to a class declaration.
    this.name = name
    this.age = age
    this.details = `user name is ${this.name}, age is ${this.age}`
}

const person3=(name, age)=>{
    this.name = name
    this.age = age
    this.detais = `user name ${this.name}, age is ${this.age}`
}


const user1 = new person('ram',34)
console.log(user1.details)                  //user name is ram, age is 34

const user2 = new person2('vinay',99)
console.log(user2.details)                  //user name is vinay, age is 99

//const user3 = new person3('kiran',34)    //TypeError: person3 is not a constructor