function Person(name){
    this.name = name
    this.talk = ()=>{
        return `hello ${this.name}`
    }
}

const ram = new Person('ram')
console.log(ram.talk());
const sam = new Person('sam')
console.log(sam.talk());
const jam = new Person('jam')
console.log(jam.talk());
