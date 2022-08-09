function PersonName (firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

PersonName.prototype.getFullName = function(){
    return `hello ${this.firstName} ${this.lastName}`
}

function PersonDetails(firstName, lastName, age){
    PersonName.call(this, firstName, lastName)
    this.age = age
    this.address = 'andhra'
}

PersonDetails.prototype = Object.create(PersonName.prototype)

PersonDetails.prototype.constructor = PersonDetails

PersonDetails.prototype.getAddress = function(){
    return `address ${this.age} ${this.firstName}`
}


const person1 = new PersonDetails('raj','kumar',20)

console.log(person1.getFullName())
console.log(person1.getAddress())