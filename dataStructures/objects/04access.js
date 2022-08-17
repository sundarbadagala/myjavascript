const obj1 = {
    name:'chandu',
    age:90,
    color:'blue',
    bike:'duke'
}

console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.color)
console.log(obj1.bike)

console.log(obj1['name'])
console.log(obj1['age'])
console.log(obj1['color'])
console.log(obj1['bike'])

const {name, age, color, bike} = obj1

console.log(name)
console.log(age)
console.log(color)
console.log(bike)

