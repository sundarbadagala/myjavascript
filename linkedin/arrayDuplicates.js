const arr = [1, 2, 2, 3, 4, 5, 5];

function main(arr) {
  let obj = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!obj[el]) {
      obj[el] = true;
      res.push(el);
    }
  }
  return res;
}

console.log(main(arr));
