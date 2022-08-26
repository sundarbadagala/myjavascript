const set = new Set()

set.add(1)
set.add('1')
set.add({1:'one'})

console.log(set)

for(let i of set){
    console.log(i)
}

