const obj = {firstName :"kiran"}

function main(age){
    return `name : ${this.firstName}, age : ${age}`
}

console.log(main.call(obj, 23));
console.log(main.bind(obj, 23)());
console.log(main.bind(obj, 23));

