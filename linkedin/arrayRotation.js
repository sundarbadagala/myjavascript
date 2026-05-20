const arr = [1, 2, 3, 4, 5, 6];
const k = 2;
const direction = "left";


function main2(arr, k, dir){
    const modK = dir === 'left' ? k : arr.length - k
    let rotateArr = []
    let remainingArr = []
    for(let i=0; i < arr.length; i++){
        if(i < modK){
            rotateArr.push(arr[i])
        }else{
            remainingArr.push(arr[i])
        }
    }
    return remainingArr.concat(rotateArr)
}

console.log(main2(arr, k, direction))



function main(arr, k, dir) {
  if (!Array.isArray(arr)) return "invalid array";
  if (!arr.length) return "array is empty";
  if (k === 0) return arr;
  if (k < 0) return "Invalid k ";
  if (!["left", "right"].includes(dir)) return "invalid direction";
  k = k % arr.length;
  const newArr = [...arr];
  const remove = dir === "left" ? +k : -k;
  const modArr = newArr.splice(remove);
  return [...modArr, ...newArr];
}

// console.log(main(arr, k, direction));
// console.log(arr);

