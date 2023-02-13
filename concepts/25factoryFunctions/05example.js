function factoryFn(name) {
    return {
        name,
        talk() {
            return `hello ${name}`
        }
    }
}

const me = factoryFn('vijay')
const you = factoryFn('ajay')

console.log(me.talk());
console.log(you.talk());

me.talk = function () {
    return `hi ${this.name}`
}

console.log(me.talk());
console.log(you.talk());
//every instance have different copy, so it's take more space
// if we want change in talk function, we have to change in every instance individually, it's not correct method
