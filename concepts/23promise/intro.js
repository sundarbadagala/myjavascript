const promise = new Promise((resolve, reject)=>{
    const isOk = true
    if(isOk){
        resolve('resolved')
    }else{
        reject('rejected')
    }
})

promise
.then(res => console.log(res))
.catch(err => console.log(err))