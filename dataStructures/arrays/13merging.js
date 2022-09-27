const arr1 = [1,2,3,4]
const arr2 = ['a','b','c','d']

const res3 = ()=>{
    const newArr=[]
    for(let i =0; i<arr1.length; i++){
        newArr[i] = arr1[i]
    }
    for(let i=0; i<arr2.length; i++){
        newArr[arr1.length + i] = arr2[i]
    }
    return newArr
}

console.log(res3());