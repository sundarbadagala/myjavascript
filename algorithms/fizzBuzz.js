const n = 100

function fizBuz (m){
    for(let i =0; i<=m; i++){
        console.log((i%3 ===0 ? 'fiz' : '') + (i%5 ===0 ? 'buzz':"") || i)
    }    
}

fizBuz(n)