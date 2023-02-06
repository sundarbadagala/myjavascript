//find the contegious sub array which has the largest sum and returns its sum

//I/P  [-2, 1, -3, 4 , -1, 2, 1, -5, 4]
//O/P 6
//-> [4, -1, 2, 1]


//I/P  [ 1]
//O/P 1
//-> [1]

//I/P  [5, 4, -1, 7, 8]
//O/P 23
//-> [5, 4, -1, 7, 8]


const array = [-2, 1, -3, 4 , -1, 2, 1, -5, 4]

//--------------------------------------O(n^3)---------------------------------------

function Kadenes(arr){
    let sums = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            // console.log('=>', arr.slice(j,i+1));
            let sum = 0
            for (let k = 0; k < arr.slice(j,i+1).length; k++) {
                sum = sum + arr.slice(j,i+1)[k]
            }
            sums.push(sum)
        }   
    }
    return sums
}

// console.log(Kadenes(array));

//--------------------------------------O(n^2)---------------------------------------

function Kadenes2(arr){
    let sums = []
    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = i; j < array.length; j++) {
            // console.log(arr[j]);
            sum += arr[j]
        }
        sums.push(sum)
    }
    return sums
}

// console.log(Kadenes2(array))

//--------------------------------------O(n)---------------------------------------

function Kadenes3(arr){
    let sum = 0
    let maxi = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        maxi = Math.max(maxi, sum)
        if(sum < 0 ) sum = 0
    }
    return maxi
}

// console.log(Kadenes3(array));

//--------------------------------------O(n)---------------------------------------

function Kadenes4(arr){
    let maxSum = 0
    let currSum = 0
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        if(currSum > maxSum) maxSum = currSum
        if(currSum < 0) currSum = 0
    }
    return maxSum
}
console.log(Kadenes4(array));