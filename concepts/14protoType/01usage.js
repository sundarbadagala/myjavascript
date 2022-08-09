function Person(fName,lName){
    this.firstName = fName
    this.lastName = lName
}

const person1 = new Person('vijay','ram')
const person2 = new Person('arun','kumar')

person1.getFullName = function(){
    return `hello ${this.firstName} ${this.lastName}`
}
person2.getFullName = function(){
    return `hello ${this.firstName} ${this.lastName}`
}

console.log(person1.getFullName())  //hello vijay ram
console.log(person2.getFullName())  //hello arun kumar //TypeError: person2.getFullName is not a function

//================================================================================================================================

function User(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const user1 = new User('rama','rao')
const user2 = new User('raja','mouli')

User.prototype.getCompleteName = function(){
    return `hello ${this.firstName} ${this.lastName}`
}

//console.log(user1.getCompleteName())    //hello rama rao
//console.log(user2.getCompleteName())    //hello raja mouli