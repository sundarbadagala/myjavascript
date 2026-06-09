const arr=[{id:1, name:'ram'},{id:1,name:'raj'},{id:2,name:'ram'},{id:3,name:'rao'}]

function dup(arr){
    const newArr=[]
    for(let i=0; i<arr.length; i++){
        if(newArr.filter(item => item.id === arr[i].id ).length === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(dup(arr))