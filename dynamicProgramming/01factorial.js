//traditional method
export function factorial(n) {
    let sum = 1
    for (let i = 1; i <= n; i++) {
        console.log('->', i);
        sum *= i
    }
    return sum
}

//----------------------------------------------------------
//recursive method
export function factorial2(n) {
    if (n <= 0) return 1
    return n * fact2(n - 1)
}

//----------------------------------------------------------
//memoization
export const factorialMemo = (() => {
    let cache = {}
    return (...args) => {
        let n = args.toString()
        if (!cache[n]) {
            cache[n] = fact(...args)
        }
        return cache[n]
    }
})()

//----------------------------------------------------------
//dynamic programming
export const factorialMemo2 = (() => {
    let cache = {}
    return (n) => {
        if (cache[n]) return cache[n]
        let sum = 1
        for (let i = n; i > 1; i--) {
            console.log('->', i);
            if (cache[i]) {
                return sum * cache[i]
            }
            sum *= i
        }
        cache[n] = sum
        return cache[n]
    }
})()
