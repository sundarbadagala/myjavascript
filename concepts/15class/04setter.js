//-------------------WITHOUT SETTER-----------------
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    setAge(age) {
        this.age = age
    }
    getAge() {
        return `Age is ${this.age}`
    }
}
const person = new Person('ram', 'kumar')
person.setAge(10)
console.log(person)

//----------------------WITH SETTER-------------------

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    //A 'set' accessor must have exactly one parameter.
    set setAge(age) {
        this.age = age
    }
}

const user = new User('vijay', 'kumar')
user.setAge = 80
console.log(user)