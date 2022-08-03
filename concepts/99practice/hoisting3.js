// console.log(person.details)     //ReferenceError: Cannot access 'person' before initialization

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        this.details = `hello ${this.name}`
    }
}

const person = new Person('vinary', 18)


