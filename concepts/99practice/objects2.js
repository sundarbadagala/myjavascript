const obj={
    name:'vinay',
    age:40
}
//output [['name','ram'],['age',40]]


console.log(Object.entries(obj))
//========================================================================================================================
let arr=[]
for(let i in obj){
    arr.push([i, obj[i]])
}
console.log(arr)
//========================================================================================================================
const keys=Object.keys(obj)
const arr1=[]
for(let i=0; i<keys.length; i++){
    arr1.push([keys[i],obj[keys[i]]])
}
console.log(arr1)
//========================================================================================================================
const arr2=[]
for(let i of keys){
    arr2.push([i, obj[i]])
}
console.log(arr2)
//========================================================================================================================
console.log(keys.map(item => [item, obj[item]]))
