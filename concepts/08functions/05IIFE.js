(function(){
    console.log('hello world')
})()

const n = 9

const isEven = (function (){
    if(n%2 === 0) return 'event'
    return 'odd'
})()

const isOdd = (()=>{
    if(n%2 === 0 ) return 'even'
    return 'odd'
})()

console.log(isEven)
console.log(isOdd)

function myFn(){
    console.log('welcome to');
    (function(){ console.log('my');})();
    console.log('world');
}
myFn()