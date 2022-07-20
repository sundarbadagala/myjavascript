const arr1 = [1,2,3,4,5,6,7]

//ouput [1,2,3,4,5,6,7] => [3,4,5] => return particular part
const res1 = arr1.slice(2,5)

//ouput [1,2,3,4,5,6] => [1,2,6,7] => delete particular part
const res2 = [...arr1]
res2.splice(2,3)