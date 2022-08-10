import fetch from 'node-fetch'

setTimeout(()=>{
    console.log('first...')
},0)

// const promise= fetch('https://jsonplaceholder.typicode.com/users/1')
const promise = new Promise(resolve =>resolve('ok'))
// promise.then(res => res.json()).then(res => console.log(res.name))
promise.then(res => console.log(res))

let i=0
while(i <= 10000){
    // console.log(i)
    i++
}

console.log('second....')