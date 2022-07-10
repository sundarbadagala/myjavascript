const arr = [5, 1, 2, 7, 8, 4];
const arr1 = [-6, 20, 8, -2, 4];
const arr2=[199,2,33,76,32,11,45,45,45]

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let val = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = val;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

//BigO notation - O(n^2)

console.log(bubbleSort(arr));
console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2))
