const obj1 = {
    name:'varun',
    age:20
}
const obj2={
    name:{
        firstName:'kiran',
        lastName:'kumar'
    },
    age:30
}

//================================================================================
const obj3 = Object.assign({},obj1)     //or obj3 = {...obj1}

obj3.name = 'sivan'

console.log(obj1)       //{ name: 'varun', age: 20 }
console.log(obj3)       //{ name: 'sivan', age: 20 }

//================================================================================

const obj4 = Object.assign({}, obj2)    //or obj4 = {...obj2}

obj4.name.firstName = 'charan'

console.log(obj4)   //{ name: { firstName: 'charan', lastName: 'kumar' }, age: 30 }
console.log(obj2)   //{ name: { firstName: 'charan', lastName: 'kumar' }, age: 30 } but it should be {{firstName: 'kiran'}}

