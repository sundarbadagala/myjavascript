function primeSeries (n){
    let arr=[]
    for(let i=1; i<=n ; i++){
        let flag = true
        for(let j=2; j<i; j++){
            if(i%j === 0){
                flag = false
            }
        }
        if(flag) arr.push(i)
    }
    return arr
    
}

console.log(primeSeries(100))