const word = 'hello world'
const text = 'llo'

function kmp(w, t){
    return w.includes(t)
}

console.log(kmp(word, text));


function kmpPosition(w, t){
    return w.indexOf(t)
}

console.log(kmpPosition(word, text));