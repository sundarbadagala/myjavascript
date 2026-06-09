const arr = [1,2,3,4]

Array.prototype.myFilter = function(callback){
    let res = []
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            res.push(this[i])
        }
    }
    return res
}

console.log(arr.myFilter(item => item % 2 == 0 ))