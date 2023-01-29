function main(){
    return function* (){
        while(true){
            yield Math.random()
        }
    }
}

console.log(main());