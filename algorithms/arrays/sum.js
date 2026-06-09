const arr = [1, 2, 3, 4];

// sequantial order
function main(arr) {
  const len = arr.length;
  return (len * (len + 1)) / 2;
}
console.log(main(arr));
