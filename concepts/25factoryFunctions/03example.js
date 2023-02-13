function personFactory(name){
    return {
        talk (){
            return `hello ${name}`
        }
    }
}

const ram = personFactory('ram')
console.log(ram.talk());
const raj = personFactory('raj')
console.log(raj.talk());
const raghav = personFactory('raghav')
console.log(raghav.talk());