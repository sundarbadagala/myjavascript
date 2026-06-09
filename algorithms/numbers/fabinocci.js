function fabinocci(n){
    if(n<1){
        return 0
    }
    let arr=[0,1]
    let sum=0
    for(let i=1; i<n; i++){
        sum = arr[i] + arr[i-1];
        arr.push(sum)
    }
    return arr
}

console.log(fabinocci(6))