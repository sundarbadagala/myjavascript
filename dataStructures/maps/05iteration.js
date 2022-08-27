const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
]);

console.log(map);

for(let i of map.keys()){
    console.log('key ->',i)
}
for(let i of map.values()){
    console.log('value ->',i)
}
for(let i of map){
    console.log(i, i[0], i[1])
}
for(let [key, value] of map){
    console.log('->',key, value)
}

for(let i in map){
    console.log(i)
} //return nothing

//--------------------

map.forEach((value, key)=> console.log(`for each ${value} ${key}`))
//map.map((value, key)=> console.log(`for each ${value} ${key}`)) //TypeError: map.map is not a function