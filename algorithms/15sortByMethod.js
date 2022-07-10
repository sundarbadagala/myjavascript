const array = [6,2,12,65,23,-4,-1,-10]

function sortMethod(arr){
    return arr.sort((a,b)=>{
        return a-b
    })
}
console.log(sortMethod(array))