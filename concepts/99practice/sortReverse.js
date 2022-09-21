const arr = 'what time are we climbing up the volcano'

function rev(arr){
    return arr.split(' ').map(item => item.split('').reverse().join('')).sort().map(item => item.split('').reverse().join(''))
}

console.log(rev(arr))

//['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']