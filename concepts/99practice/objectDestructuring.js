// const obj={
//     firstName:'kiran',
//     address:{
//         state:'andhra'
//     },
//     age:34,
//     color:'blue'
// }
const obj=null

const {firstName, address} = {...obj}
const {state} = {...address}
// console.log(firstName, state)

//================================================================================================================================================
const obj1 = {
    name:'varun',
    message: function(){
        console.log(`hello ${this.name}`)
    }
}

obj1.message()
setTimeout(obj1.message, 1000)
setTimeout(()=>obj1.message(),2000)