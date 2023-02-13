function main(...args){
    console.log(args);
    console.log(args[0]);
    console.log(typeof args);
    console.log(Array.isArray(args));
}

main(1, 3, 2)

//-------------
const arr = [1,2,3]
console.log(typeof arr);    // in js no typeof array exist
console.log(Array.isArray(arr));