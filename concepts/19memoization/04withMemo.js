//with memoization => best method
const squareFn=(n)=>{
    let count=0
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            count++
        }
    }
    return count
}

const memoizationSquareFn=(()=>{
    const memoizedObj={}
    return (n)=>{
        if(!memoizedObj[n]){
            memoizedObj[n] = squareFn(n)
        }
        return memoizedObj[n]
    }
})()

console.time()
console.log(memoizationSquareFn(30000))
console.timeEnd()

console.time()
console.log(memoizationSquareFn(30000))
console.timeEnd()

console.time()
console.log(memoizationSquareFn(40000))
console.timeEnd()

console.time()
console.log(memoizationSquareFn(30000))
console.timeEnd()

console.time()
console.log(memoizationSquareFn(40000))
console.timeEnd()

console.time()
console.log(memoizationSquareFn(40000))
console.timeEnd()