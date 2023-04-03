export function canConstruct(target, wordBank) {
    if (target === '') return true
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank) === true) return true
        }
    }
    return false
}
// time complexity O(n^m * m)  //m = target.length m = wordbank.length
// space complexity O(m^2)

//---------------------------------------------------------------------------------------------------
export function canConstruct2(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return true
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct2(suffix, wordBank, memo) === true) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}
// time complexity O(n * m^2)  //m = target.length m = wordbank.length
// space complexity O(m^2)

