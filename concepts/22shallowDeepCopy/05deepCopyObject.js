const obj1 = {
    name:{
        firstName:'kiran',
        lastName:'kumar'
    }
}

const obj2 = JSON.parse(JSON.stringify(obj1))

obj2.name.firstName = 'varun'

console.log(obj2)
console.log(obj1)