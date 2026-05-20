const arr = [1, 2, 3, [4, 5, [6, [7]]]];

function main(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let nested = main(arr[i]);
      for (let j = 0; j < nested.length; j++) {
        newArr.push(nested[j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(main(arr));
