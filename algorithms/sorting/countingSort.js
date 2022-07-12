const array = [5,3,1,65,23,12,12,34,-1,0,-10]

function countingSort(arr){
    let countArr = Array(arr.length).fill(0)
    for(let n of arr){
        countArr[n]++
    }
    let finalArr = []
    for(let i=0; i<countArr.length; i++){
        finalArr.push(...Array(countArr[i]).fill(i))
    }
    return finalArr
}

console.log(countingSort(array))