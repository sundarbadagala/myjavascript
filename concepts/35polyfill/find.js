const arr = [1,2,3, 4]

Array.prototype.myFind = function(callback){
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            return this[i]
        }
    }
}


console.log(arr.myFind(item => item % 2 === 0))