const set = new Set(['a','b','c','d','e','f'])
const arr = new Array('a','b','c','d','e','f')

//------------------get first element------------------

const firstArrEl = arr[0]

const firstSetEl1 = set.values().next().value
const firstSetEl2 = set.keys().next().value
const firstSetEl3 = set.entries().next().value[0]
const firstSetEl4 = [...set][0]
const [firstSetEl5] = set

//------------------get last element------------------

const lastArrEl = arr[arr.length-1]

const lastSetEl = [...set][set.size-1]

const lastSetEl2 = ()=>{
    let res
    for(let value of set){
        res = value
    }
    return res
}

//------------------add element at first------------------

const addArrFirstEl = [...arr]
addArrFirstEl.unshift('z')

let addSetFirstEl = [...set] 
addSetFirstEl.unshift('z')
addSetFirstEl = new Set(addSetFirstEl)

let addSetFirstEl2 = Array.from(set)
addSetFirstEl2.unshift('z')
addSetFirstEl2 = new Set(addSetFirstEl2)

//Note : set have convert to array, do the operation, again that array have convert to set