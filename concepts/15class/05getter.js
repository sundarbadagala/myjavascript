//-------------------WITHOUT GETTER-------------------
class Perons {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    getName() {
        return `Hi ${this.firstName} ${this.lastName}`
    }
}

const person = new Perons('rama', 'rao')
console.log(person.getName())

//-------------------WITH GETTER-------------------
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    //A 'get' accessor cannot have parameters.
    get getName(){
        return `Hi ${this.firstName} ${this.lastName}`
    }
}
const user = new User('raghav', 'rao')
console.log(user.getName)