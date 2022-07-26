import { dummyData } from './data/dummy.js'

import {addData, searchData} from './helpers.js'

const reqBody = {
    name:'ram',
    age:12,
    color:'white'
}

console.log(dummyData)
console.log(searchData(dummyData, 'age',23))