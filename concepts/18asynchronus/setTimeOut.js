function main(){
    console.log('hello')
}
const clear = setTimeout(main, 2000)

clearTimeout(clear)