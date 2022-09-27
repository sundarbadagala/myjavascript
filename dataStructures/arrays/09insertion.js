const arr=[6,1,3,6,2]
const el = 'a'
const position = 2


//============================================================================================================
function insertByMethod(){
    const newArr = JSON.parse(JSON.stringify(arr))
    newArr.splice(position, 0, el)
    return newArr
}

console.log(insertByMethod())

//============================================================================================================

function insertByFuncion(){
    const newArr = JSON.parse(JSON.stringify(arr))
    for(let i= newArr.length-1; i>=0; i--){
        if(i >= position){
            newArr[i+1] = newArr[i]
            if(i === position){
                newArr[i] = el
            }
        }
    }
    return newArr
}
console.log(insertByFuncion())

console.log(arr)