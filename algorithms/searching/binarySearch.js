const array = [2, 3, 4, 6, 7, 8, 9];

function binarySearch(arr, n) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (n === arr[midIndex]) {
      return midIndex;
    } else if (n < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}

//BigO notation - O(log(n))

console.log(binarySearch(array, 4));
console.log(binarySearch(array, 6));
