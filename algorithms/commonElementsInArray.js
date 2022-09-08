function common(...arr){
    if(arr.length  === 1){
        return arr[0]
    }
    const [a,b, ...c] = arr
    const commonVal = a.filter(i => b.includes(i))
    return common(commonVal, ...c)

}

console.log(common([1,2,3,4], [1,2,3,4,5],[1,2,3,4,5], [1,2,3,4]))