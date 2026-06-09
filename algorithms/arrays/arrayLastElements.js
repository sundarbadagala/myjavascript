function lastElements(arr,n){
    return arr.slice(arr.length - n)
}
//=======================================
function lastElements2(arr, n){
    return arr.slice(-n)
}

// console.log(lastElements2([1,2,4,7,5,3,1,3,9,1],3))

const arr = [4,1,7,12,4,3]
const arr1 = arr.reverse()
console.log(arr, arr1)
