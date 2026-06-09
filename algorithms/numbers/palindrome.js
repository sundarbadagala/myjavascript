const s = '1234321'
function palindrome(str){
    return str === str.split('').reverse().join('')
}

console.log(palindrome(s))
