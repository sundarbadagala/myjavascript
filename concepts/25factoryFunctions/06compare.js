//a factory function is just a function that creates objects and returns them that'sa factory function is just a function that creates objects and returns them that's

//-------object vs function--------

const userOne = {
    name : 'vijay',
    call(){
        return `hello ${this.name}`
    }
}
const userTwo = {
    name:'raghav',
    call(){
        return `hello ${this.name}`
    }
}

console.log(userOne.call());
console.log(userTwo.call());     //too much of duplication needed

userOne.name = 'ram'

console.log(userOne.call());  // the values is chaning, so its not secure.

//-----------------------------

const personOne = function(name){
    return {
        call(){
            return `hiiii ${name}`
        }
    }
}

const ram = personOne('ram')
console.log(ram.call());
const raghava = personOne('raghava')
console.log(raghava.call());
//no dupliacation code and can't change the inside variabled directly