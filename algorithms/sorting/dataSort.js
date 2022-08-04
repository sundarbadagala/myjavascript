
const arr=[4,-1,0,-5,313,45,21,8,31]
const data = [{name:'kiran', age:78}, {name:'vijay', age:23}, {name:'anand', age:54}]

const mergeSort = (arr, key)=>{
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = mergeSort(arr.slice(0, mid), key)
    const righArr = mergeSort(arr.slice(mid), key)
    const sortedArr=[]
    while(leftArr.length && righArr.length){
        const lKey = key?.length > 0  && leftArr?.[0]?.[key]
        const rKey = key?.length > 0 && righArr?.[0]?.[key]
        if(lKey > rKey ){
            sortedArr.push(righArr.shift())
        }else{
            sortedArr.push(leftArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...righArr]
}

console.log(mergeSort(data, 'name'))