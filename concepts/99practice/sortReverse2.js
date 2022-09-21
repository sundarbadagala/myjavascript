const arr = 'what time are we climbing up the volcano'

function rev(arr){
    return arr.split(' ').reverse().sort((a,b)=>{
        return a[a.length - 1]>b[b.length - 1] ? 1 : -1
    })
}
console.log(rev(arr))