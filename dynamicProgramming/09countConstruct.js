export function countConstruct(target, wordBank){
    if(target === '') return 1
    let totalCount = 0
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const num = countConstruct(target.slice(word.length), wordBank)
            totalCount += num
        }
    }
    return totalCount
}
//time complexity O(n^m * m) m=target length n=wordbank length
//space complexity O(m^2)

//-------------------------------------------------------------------------------------------------

export function countConstruct2(target, wordBank, memo={}){
    if(target in memo) return memo[target]
    if(target === '') return 1
    let totalCount = 0
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const num = countConstruct2(target.slice(word.length), wordBank, memo)
            totalCount += num
        }
    }
    memo[target] = totalCount
    return totalCount
}
//time complexity O(n * m^2) m=target length n=wordbank length
//space complexity O(m^2)
