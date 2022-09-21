const n = 10

function Loop(n){
    let even=[]
    let odd=[]
    for(let i=0; i<n; i++){
        if(i%2 === 0){
            even.push(i)
        }else{
            odd.push(i)
        }
    }
    return [...even, ...odd]
}

console.log(Loop(n))