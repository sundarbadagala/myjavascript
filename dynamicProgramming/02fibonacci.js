//-----------------------------------------------------
export const fibonacci=(n)=>{
    if(n<=1){
        return n
    }
    let sums = [1,1]
    for (let i = 2; i < n; i++) {
        console.log('->', i);
        sums[i] = sums[i-1] + sums[i-2]
    }
    return sums[n-1]
}
// O(n)

//-----------------------------------------------------
export const fibonacci2=(n)=>{
    console.log('->', n);
    if(n<=1){
        return n
    }
    return fibonacci2(n-1) + fibonacci2(n-2)
}
// O(2^n)

//-----------------------------------------------------
export const fibonacci3=(()=>{
    let cache={}
    return (n)=>{
        if(n <= 1) return n
        if(!cache[n]) {
            cache[n] = fibonacci(n)
        }
        return cache[n]
    }
})()
//-----------------------------------------------------
