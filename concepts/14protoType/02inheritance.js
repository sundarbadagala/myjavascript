//inheriting person name into the person details

function PersonName(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

PersonName.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

function PersonDetails(fName, lName, age){
    PersonName.call(this, fName, lName)
    this.age = 12
    this.address='andhra'
}

PersonDetails.prototype = Object.create(PersonName.prototype)

PersonDetails.prototype.checkAddress = function(){
    return `address ${this.address}`
}

PersonDetails.prototype.constructor = PersonDetails

const personDetails = new PersonDetails('arun','kumar')



console.log(personDetails.getFullName())
console.log(personDetails.checkAddress())
