const array=[43,12,2,12,11,65,33]

function sort(arr){
  if(arr.length < 2){
    return arr
  }
  const mid = Math.floor(arr.length/2)
  const leftArr = sort(arr.slice(0, mid))
  const rightArr = sort(arr.slice(mid))

  let sortedArr=[]

  while(leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      sortedArr.push(leftArr.shift())
    }else{
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(sort(array));