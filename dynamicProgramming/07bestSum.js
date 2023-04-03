export function bestSum(n, arr) {
    if (n === 0) return []
    if (n < 0) return null
    let shortestCombination = null
    for (let item of arr) {
        const reminder = n - item
        const reminderCombination = bestSum(reminder, arr)
        if (reminderCombination !== null) {
            const combination = [...reminderCombination, item]
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    return shortestCombination
}
// time complexity O(m^n * n) n=target number;  m=array length
// space complexity O(n^2)
//--------------------------------------------------------------------------------------------------
export function bestSum2(n, arr, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 0) return []
    if (n < 0) return null
    let shortestCombination = null
    for (let item of arr) {
        const reminder = n - item
        const reminderCombination = bestSum2(reminder, arr, memo)
        if (reminderCombination !== null) {
            const combination = [...reminderCombination, item]
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    memo[n] = shortestCombination
    return shortestCombination
}
// time complexity O(n^2 * m) n=target number;  m=array length
// space complexity O(n^2)