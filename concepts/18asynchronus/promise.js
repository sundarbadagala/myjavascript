const promise = new Promise((resolve, reject)=>{
    let x=0
    if(x){
        resolve('OK')
    }else{
        reject('fail')
    }
})

promise.then((res)=>myFn(res), (err)=>myFn(err))

const myFn=(val)=>{
    console.log(val)
}