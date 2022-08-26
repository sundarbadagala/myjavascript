//-----------SET TO ARRAY------------

const set = new Set(['a','b','c','d','e'])

const arr1 = [...set]
const arr2 = Array.from(set)


//-----------ARRAY TO SET------------

const arr = new Array('a','b','c','d','e')

const set1 = new Set(arr)