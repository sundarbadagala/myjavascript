const arr= [5,2,1,8,'a',4]
const position=4

//============================================================================================================

function deleteByMethod(){
    const newArr = JSON.parse(JSON.stringify(arr))
    newArr.splice(position,1)
    return newArr
}
console.log(deleteByMethod())

//============================================================================================================

function deleteByFunction(){
    if(position < 0 || position > arr.length){
        return arr
    }
    const newArr = new Array(arr.length-1)
    for(let i=0; i<newArr.length; i++){
        if(i >= position){
            newArr[i] = arr[i+1]
        }else{
            newArr[i] = arr[i]
        }   
    }
    return newArr
}
console.log(deleteByFunction())

//============================================================================================================

function deleteByFunction2(){
    const newArr = JSON.parse(JSON.stringify(arr))
    delete newArr[position]
    const modArr=[]
    for(let i=0; i<newArr.length; i++){
        if(newArr[i]){
            modArr.push(newArr[i])
        }
    }
    return modArr
}

console.log(deleteByFunction2())

//============================================================================================================

function deletionByFunction(){
    const newArr=[]
    for(let i=0; i <arr.length; i++){
        if(i !== position){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(deletionByFunction())

console.log(arr)