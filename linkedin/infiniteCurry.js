function main(num) {
  let sum = num;
  function inner(nestedValue) {
    if (nestedValue === undefined) {
      return sum;
    }
    sum += nestedValue;
    return inner;
  }
  return inner;
}

console.log(main(2)(3)(4)());
