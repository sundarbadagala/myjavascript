const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('promise one...')
    }, 5000)
})

const p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('promise two...')
    },1000)
})

const main = async()=>{
    console.log('hello world')
    const val1 = await p1
    console.log(val1)
    const val2 = await p2
    console.log(val2)
}
// main()

const mainTwo = async()=>{
    console.log('hello world')
    p1.then(res => console.log(res))
    p2.then(res => console.log(res))
}
mainTwo()