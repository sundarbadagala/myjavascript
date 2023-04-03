export function howSum(n, arr) {
    if (n === 0) return []
    if (n < 0) return null
    for (const item of arr) {
        const reminder = howSum(n - item, arr)
        if (reminder !== null) return [...reminder, item]
    }
    return null
}
//time complexity O(m^n * n) m=length of array n=target sum number
//space complexity O(n)

export function howSum2(n, arr, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 0) return []
    if (n < 0) return null
    for (const item of arr) {
        const reminder = howSum2(n - item, arr, memo)
        if (reminder !== null) {
            memo[n] = [...reminder, item]
            return memo[n]
        }
    }
    memo[n] = null
    return null
}
//time complexity O(m*n^2) m=length of array n=target sum number
//space complexity O(n^2)