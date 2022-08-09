class PersonName {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName(){
        return `hello ${this.firstName} ${this.lastName}`
    }
}

class PersonDetails extends PersonName {
    constructor(firstName, lastName, age){
        super(firstName, lastName)
        this.age = age
        this.address = 'andhra'
    }
    getFullDetails(){
        return `address ${this.address} ${this.age} ${this.firstName}`
    }
}

const person1 = new PersonDetails('vijay','kumar',90)

console.log(person1.getFullName())
console.log(person1.getFullDetails())