const person = {
  name: "ram",
  greet() {
    return `Hello ${this?.name}`;
  }
};

// console.log(person.greet());

// const fn = person.greet
// console.log(fn())

//----------------------------------------

const person2 = {
    name:'raj'
}

function greet(age, city){
    console.log(`${this.name} ${age} ${city}`)
}
greet.call(person2, 24, 'Vizag')


function greet2(age, city){
    console.log(`${this.name} ${age} ${city}`)
}
greet2.apply(person2, [24, 'Vijay'])


function greet3(age, city){
    console.log(`${this.name} ${age} ${city}`)
}
const greetFn = greet3.bind(person2)
greetFn(24, 'Vijay')

