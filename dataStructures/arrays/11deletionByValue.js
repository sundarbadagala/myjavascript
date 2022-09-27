const arr=[6,3,18,'a',10,100]
const val = 6

//=====================================================================================================================

function deleteByMethod(){
    const newArr = JSON.parse(JSON.stringify(arr))
    const index = newArr.indexOf(val)
    index >= 0 && newArr.splice(index, 1)
    return newArr
}
console.log(deleteByMethod())

//=====================================================================================================================

function deleteByFunction(){
    const newArr = []
    for(let i=0; i < arr.length; i++){
        if(val !== arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(deleteByFunction());

//=====================================================================================================================
function deleteByFunction1(){
    let index
    for(let i=0; i < arr.length;i++){
        if(arr[i] === val){
            index = i
            break
        }
    }
    if(index === undefined){
        return arr
    }
    
    const newArr = new Array(arr.length-1)
    for(let i=0; i<= newArr.length-1; i++){
        if(i >= index){
            newArr[i] = arr[i+1]
        }else{
            newArr[i] = arr[i]
        }
    }
    return newArr
}
console.log(deleteByFunction1())

console.log(arr)