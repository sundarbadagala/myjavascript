const array1 = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10","1,9,10,12,14,45","1,9,11"]
//output [1,,3,9]
const array2 = ['1,2,3','1,2']
//output [1,2]
const array3 = ['1,2,3','1,2,3','1,2']
//output [1,3]



function common(arr){
    // console.log(arr);
    if(arr[0].length === 1){
        return arr
    }
    if(arr.length === 1){
        return null
    }
    const [a,b,...c] =  arr.map(item => item.split(','))
    const resArr = a.filter(item => b.includes(item))
    console.log(resArr.join(','), c);
    return common(resArr,c)
}

console.log(common(array1))