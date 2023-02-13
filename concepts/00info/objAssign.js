const x = {
    name:'ram'
}
const y = x

console.log(x.name);
console.log(y.name);

y.name = 'raghav'

console.log(y.name);
console.log(x.name);