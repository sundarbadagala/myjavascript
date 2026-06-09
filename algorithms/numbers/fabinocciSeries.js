function fabinocci (n){
    const arr = [0,1]
    for(let i=2; i<n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
}

console.log(fabinocci(1))

//Big-O notation O(n) - linear time complexity