const array=[6,3,9,5,1,4]

//-----------------------------------------traditional for loop--------------------------------------------
function linearSearch(arr, n){
    for(let i=0; i<arr.length; i++){
        if(n === arr[i]){
            return i
        }
    }
    return -1
}
//-----------------------------------------for in loop--------------------------------------------
function linearSearch2(arr, n){
    for(i in arr){
        if(arr[i] === n){
            return i
        }
    }
    return -1
}
//-----------------------------------------for of loop--------------------------------------------
function linearSearch3(arr, n){
    for(i of arr){
        if(i === n){
            return arr.indexOf(i)
        }
    }
    return -1
}


//big O notation -  O(n)
console.log(linearSearch3(array,1))
console.log(linearSearch3(array,4))
console.log(linearSearch3(array,6))