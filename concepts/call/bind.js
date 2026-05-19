const person = {
    firstName:'ram',
    lastName:'kumar',
    fullName(){
        return `Hi ${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName())
const getFullName = person.fullName.bind(person)
console.log(getFullName())