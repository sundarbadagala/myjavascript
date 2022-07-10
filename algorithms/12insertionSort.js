const array = [96, 5, 42, 1, 6, 37, 21];

//--------------------------------------for loop------------------------------------

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curEl = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > curEl; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curEl;
  }
  return arr;
}

//--------------------------------------while loop------------------------------------
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curEl = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curEl) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curEl;
  }
  return arr;
}


//BigO notation - O(n^2)
console.log(insertionSort2(array));
