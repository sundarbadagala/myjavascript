//memoization

const squareFn=(n)=>{
    let count=0
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            count++
        }
    }
    return count
}

const memoizationFn=(callback)=>{
    const memoizedObj={}
    return (n)=>{
        console.log('===>',memoizedObj)
        if(!memoizedObj[n]){
            memoizedObj[n] = callback(n)
        }
        return memoizedObj[n]
    }
}

const square = memoizationFn(squareFn)


console.time()
console.log(square(30000))
console.timeEnd()

console.time()
console.log(square(30000))
console.timeEnd()

console.time()
console.log(square(40000))
console.timeEnd()

console.time()
console.log(square(30000))
console.timeEnd()

console.time()
console.log(square(40000))
console.timeEnd()

console.time()
console.log(square(40000))
console.timeEnd()
