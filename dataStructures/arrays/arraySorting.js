const arr1 = [4,21,22,31,12,1,5,3,4,5,2]
const arr2 = ['chin','bill','a','ball','ant','can','bail','and','chain','ban','zero','yes','yes','can']
const arr3 = [1,'a','c',5,9,'d','f',0,12,90,'an','and',87]

const numerSortAscend=(arr)=>{
    return arr.sort((a,b)=> a-b)
}
const numerSortDescend=(arr)=>{
    return arr.sort((a,b)=> b-a)
}

const stringSortAscend =(arr)=>{
    return arr.sort((a,b)=> a>b ? 1 : -1)
}
const stringSortDescend =(arr)=>{
    return arr.sort((a,b)=> a>b ? -1 : 1)
}

const mixSort=(arr)=>{
    let nums = []
    let strings =[]
    for(i of arr){
        if(typeof i === 'number'){
            nums.push(i)
        }else{
            strings.push(i)
        }
    }
    return [...nums.sort((a,b)=> a-b) , ...strings.sort()]
}

console.log(mixSort(arr3))