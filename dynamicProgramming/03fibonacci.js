export const fibonaccis = (n) => {
    console.log('->',n);
    if (n <= 1) return n
    return fibonaccis(n - 1) + fibonaccis(n - 2)
}

// console.log(fab(5));

export const fibonaccis2 = (n, memo = {}) => {
    console.log('->',n, memo);
    if (memo[n]) return memo[n]
    if (n <= 2) return 1
    memo[n] = fibonaccis2(n - 1, memo) + fibonaccis2(n - 2, memo)
    return memo[n]
}