const ram = {
    name: 'ram',
    talk() {
        return `hello ${this.name}`
    }
}

const raj = {
    name: 'raj',
    talk() {
        return `hello ${this.name}`
    }
}

const raghav = {
    name: 'raghav',
    talk() {
        return `hello ${this.name}`
    }
}

const rajesh = {
    name: 'rajesh',
    talk() {
        return `hello ${this.name}`
    }
}

console.log(ram.talk());
console.log(raj.talk());
console.log(raghav.talk());
console.log(rajesh.talk());

ram.name = 'sam'

console.log(ram.talk());

//ISSUE WITH OBJECTS
// in this method the code is repeated
// its not secure, we can mainpulate values inside object
// i.e the name property is available and exposed, anyone can overrite the value