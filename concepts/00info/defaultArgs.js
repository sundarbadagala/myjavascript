function print(name='ram', age=23){
    return `name : ${name}, age : ${age}`
}

console.log(print());
console.log(print('raj', 30));

function printTwo(name, age){
    name = name || 'raj'
    age = age || 23
    return `name : ${name}, age:${age}`
}

console.log(printTwo());
console.log(printTwo('raghav', 87));