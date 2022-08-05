const arr1=[2,31,24,111,78,-1,0,-3,-100,31,54]

const shellSort = (arr) => {
    const n = arr.length
    //Reduce the interval in each cycle
    for (let interval = n / 2; interval > 0; interval /= 2) {
      //Sort the element using insertion sort in each cycle.
      for (let i = interval; i < n; i += 1) {
        let temp = arr[i];
        let j;
        for (j = i; j >= interval && arr[j - interval] > temp; j -= interval) {
          arr[j] = arr[j - interval];
        }
        arr[j] = temp;
      }
    }
    return arr
  }

console.log(shellSort(arr1))