const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('data fetch...')
    },1000)
})

promise.then((res)=>myFn(res))

const myFn=(val)=>{
    console.log(val)
}

