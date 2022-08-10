const obj={name:'varun', age:40}
//output    {myname:'varun', myage:40}

const obj2 = {name:'kiran',age:30}
//output    {my_name:'kiran',our_age:30}

//===============================================================================================================================================================
const {name:myname, age:myage}= obj
const newObj = Object.assign({},{myname, myage})
// console.log(newObj)

//===============================================================================================================================================================
const values = Object.entries(obj)
const res = values.map(([key, value]) => ['my'+key, value])
const newObj2 = Object.fromEntries(res)
// console.log(newObj2)
//===============================================================================================================================================================
const mapper={
    name:'my_name',
    age:'our_age'
}
const renameKeys=(data)=>{
    const mappedObj={}
    Object.keys(data).map(key =>{
        if(mapper[key]){
            mappedObj[mapper[key]] = data[key]
        }else{
            mappedObj[key] = data[key]
        }
    })
    return mappedObj
}

console.log(renameKeys(obj2))

