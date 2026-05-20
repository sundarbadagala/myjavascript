const arr = [1, 4, 6, 8];
const insertElement = 5;

function main(arr, r) {
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < r) {
      leftArr.push(arr[i]);
    } else if (arr[i] > r) {
      rightArr.push(arr[i]);
    }
  }
  return leftArr.concat([r], rightArr);
}
console.log(main(arr, insertElement));

// -------------------------------------------------------------------------

function insertSorted(arr, value) {
  var result = [];
  var inserted = false;

  for (var i = 0; i < arr.length; i++) {

    if (!inserted && value <= arr[i]) {
      result.push(value);
      inserted = true;
    }

    result.push(arr[i]);
  }

  // if value is largest
  if (!inserted) {
    result.push(value);
  }

  return result;
}

console.log(insertSorted(arr, insertElement));