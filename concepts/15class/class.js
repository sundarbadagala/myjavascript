class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName(){
        return `hello ${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('ram','kumar')

console.log(person1.getFullName())