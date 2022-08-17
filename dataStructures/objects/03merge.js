const obj1 = {name:'king', age:30}
const obj2 = {color:'blue', bike:'duke'}
const obj3 = {color:'red', bike:'pulsar'}


//====================================
const res1 = {...obj1, ...obj2}

console.log(res1)       //{ name: 'king', age: 30, color: 'blue', bike: 'duke' }
console.log(obj1)       //{ name: 'king', age: 30 }
console.log(obj2)       // color: 'blue', bike: 'duke' }
// -> doesn't effect original objects

//====================================

Object.assign(obj1, obj2)

console.log(obj1)       //{ name: 'king', age: 30, color: 'blue', bike: 'duke' } instead of { name: 'king', age: 30 }
console.log(obj2)       //{ color: 'blue', bike: 'duke' }
//-> the first param object will effect, changed to new object
