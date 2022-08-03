//find output
for(var i=1; i<3;i++){
    const log=()=>{
        console.log(i)          //3,3,3
    }
    setTimeout(log, 300)
}

for(let i=1; i<3;i++){
    const log=()=>{
        console.log(i)      //1,2,3
    }
    setTimeout(log, 3000)
}