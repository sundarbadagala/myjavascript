//check wether the all elements in array are same or not
function isSame(arr){
    return new Set(arr).size === 1
}
//========================================================

function isSame2(arr){
    return arr.every((item, i , a) => a[0] === item )
}

//=========================================================
function isSame3(arr){
    let check
    for(let i=0; i<arr.length; i++){
        if(arr[0] !== arr[i]){
            return false
        }
    }
    return true
}

console.log(isSame3([1,1,1,1,1,1]))