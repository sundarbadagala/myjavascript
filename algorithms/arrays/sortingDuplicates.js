// object
// set 
// filter
// map
// reducer
// sort
// findIdex
// includes

const arr = [12, 32, 12, 1, 65, 32, 99, 99, 99, 23]

function main(arr){
    let flagged
    do{
        flagged = false
        for(let i=0; i< arr.length; i++){
               if(arr[i] > arr[i+1]){
                let curr = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = curr
                flagged = true
            }
        }
    }while(flagged)
    let sortedArr = []
    for(let j=0; j < arr.length; j++){
        if(arr[j] != arr[j+1]){
            sortedArr.push(arr[j])
        }
    }
    return sortedArr
}

console.log(main(arr))