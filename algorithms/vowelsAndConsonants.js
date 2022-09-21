const text= 'hello world'

function check(str){
    const allVowels = ['a','e','i','o','u']
    const vowels=[]
    const consonants=[]
    for(let i=0; i<str.length; i++){
        if(allVowels.includes(str[i])){
            vowels.push(str[i])
        }else{
            consonants.push(str[i])
        }
    }
    return `vowels:${vowels}, consonants:${consonants}`
}

console.log(check(text))