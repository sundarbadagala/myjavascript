export function canSum(n, arr) {
    if (n === 0) return true
    if (n < 0) return false
    for (const item of arr) {
        const isValid = canSum(n - item, arr)
        if (isValid) return true
    }
    return false
}
//time complexity O(m^n) m=length of array n=target sum number
//space complexity O(n)


export function canSum2(n, arr, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 0) return true
    if (n < 0) return false
    for (let item of arr) {
        if (canSum2(n - item, arr, memo) === true) {
            memo[n] = true
            return true
        }
    }
    memo[n] = false
    return false
}
//time complexity O(m*n)  m=length of array n=target sum number
//space complexity O(m)