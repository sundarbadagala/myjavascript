const obj1 = {
    name:'varun',
    age:87,
    color:'red',
    bike:'duke'
}


console.log(obj1.name)      //varun
//console.log(obj1[name])   //ReferenceError: name is not defined

const key = 'name'
console.log(obj1[key])      //varun
console.log(obj1.key)       //undefined