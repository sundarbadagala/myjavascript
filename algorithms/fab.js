const value = 10;

function fab1(n) {
  let arr = [0, 1];
  if (n < 2) return arr;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fab1(value));

// ------------------------------------------------

function fab2(n) {
  if (n < 2) return n;
  return fab2(n - 1) + fab2(n - 2);
}
console.log(fab2(value));

// -------------------------------------------------------

function fab3(n){
    const phi = (Math.sqrt(5) + 1)/2
    return Math.floor(Math.pow(phi, n) / Math.sqrt(5) + 0.5)
}
console.log(fab3(value))
