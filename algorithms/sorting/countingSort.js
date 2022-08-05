const array = [5,1,65,12,34,-1,0,-10]

function countingSort(arr){
    const count = []
    const min = Math.min(...arr)
    const max = Math.max.apply(Math, arr)
    for(let i=min; i<=max; i++){
        count[i] = 0
    }
    for(let i=0; i<= arr.length; i++){
        count[arr[i]]++
    }
    const sortedArr=[]
    for(let i=min;i<=max; i++){
        while(count[i] > 0){
            sortedArr.push(i)
            count[i]--
        }
    }
    return sortedArr
}

console.log(countingSort(array))