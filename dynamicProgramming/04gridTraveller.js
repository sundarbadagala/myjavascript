export function gridTraveller(m, n) {
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1)
}
//time complexity O(2^m+n)
//space complexity O(m+n)


export function gridTraveller2(m, n, memo = {}) {
    const key = `${m},${n}`
    if (memo[key]) return memo[key]
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    memo[key] = gridTraveller2(m - 1, n, memo) + gridTraveller2(m, n - 1, memo)
    return memo[key]
}
//time complexity O(m*n)
//space complexity O(m+n)

//NOTE : gridTraveller(m,n) === gridTraveller(n,m)