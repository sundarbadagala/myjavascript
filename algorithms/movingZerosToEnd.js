const arr1 = ['a',3,5,0,0,2,0,1,0,'b',0,'c',0,3,3,12,3444,0,1,0,11,0,131313,0,909,0,434,0,33,0,0,0,0] 

const movingZerosToEnd=(arr)=>{
    let newArr=[]
    for(let i=arr.length-1; i >= 0; i-- ){      //O(n)
        if(arr[i] === 0){
            newArr.push(arr[i])                 //O(1)
        }else{
            newArr.unshift(arr[i])              //O(n)
        }
    }
    return newArr                               //O(n^2) 
}


const movingZerosToEnd2 = (arr)=>{
    return [...arr.filter(item => item !==0 ), ...arr.filter(item => item === 0)]
}

console.time()
console.log(movingZerosToEnd2(arr1))
console.timeEnd()