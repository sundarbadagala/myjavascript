function normalFn(){
    return 'hello'
}
console.log(normalFn()) //hello

async function asyncFn(){
    return 'hello'
}
console.log(asyncFn())  //Promise { 'hello' }

const asyncArrowFn=async ()=>{
    return 'hello'
}
console.log(asyncArrowFn())     //Promise { 'hello' }


const asyncResolveFn=async()=>{
    return Promise.resolve('hello')
}
asyncResolveFn().then(res => console.log(res))      //hello