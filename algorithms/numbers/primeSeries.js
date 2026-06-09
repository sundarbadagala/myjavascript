function primeSeries (n){
    let arr=[]
    for(let i=1; i<=n ; i++){
        let flag = true
        if(i%2 === 0 && i !== 2) flag = false
        for(let j=3; j<i; j++, j++){
            if(i%j === 0){
                flag = false
            }
        }
        if(flag) arr.push(i)
    }
    return arr
    
}

console.log(primeSeries(100))