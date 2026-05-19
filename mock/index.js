function main(n){
  let sum = n
  function inner(nextSum){
    if(nextSum === undefined){
      return sum
    }
    sum += nextSum
    return inner
  }
  return inner
}

console.log(main(2)(4)())