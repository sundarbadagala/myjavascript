const a = 8989898

function Sum(s){
    if(s.toString().length === 1){
        return s
    }
    const arr = s.toString().split('')
    let sum = 0
    for(let i=0; i < arr.length; i++){
        sum += Number(arr[i])
    }
    return Sum(sum)
}
console.log(Sum(a))