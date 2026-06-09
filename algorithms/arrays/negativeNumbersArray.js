function count(arr){
    return arr.filter(item => item<0).length
}
//================================================
function count2(arr){
    return arr.reduce((acc, cur)=> cur < 0 ? ++acc : acc,0)
}
//================================================
function count3(arr){
    let c = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            c += 1
        }
    }
    return c
}

console.log(count3([1,-1,4,2,1,-1,0,9,5]))