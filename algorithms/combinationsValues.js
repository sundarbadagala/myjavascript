const data=[{count:3,value:6}, {count:4, value:3}, {count:2, value:8}]

const capacity = 6

function combinations(data){
    return data.reduce((acc, item)=>{
        return acc.concat(acc.map(x => [...x, item]))
    },[[]])
}

const combo = combinations(data)
// console.log(combo)

const filterData = combo.filter( item => item.reduce((acc, curr)=> acc+curr.count, 0) <= capacity)

console.log(filterData.map(item => item.map(i => i.value)))

