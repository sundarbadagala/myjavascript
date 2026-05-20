const str = 'success'

function main(str){
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) === str.charAt(i+1)){
            return str.charAt(i)
        }
    }
    return null
}

console.log(main(str))