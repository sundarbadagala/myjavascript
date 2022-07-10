const arr=[2,4,6,7,8,9]

function recursiveBinarySearch(arr,n){
    return search(arr, n, 0, arr.length-1)
}

function search(arr, t, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let midIndex = Math.floor((leftIndex+rightIndex)/2)
    if(t === arr[midIndex]){
        return midIndex
    }else if(t < arr[midIndex]){
        return search(arr, t, leftIndex, midIndex-1)
    }else{
        return search(arr, t, midIndex+1, rightIndex)
    }
}
//BigO notation - O(log(n))

console.log(recursiveBinarySearch(arr,4))
console.log(recursiveBinarySearch(arr,6))
console.log(recursiveBinarySearch(arr,7))
