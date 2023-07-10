import { pipeline1, pipeline2, pipeline3 } from './pipeline.js'
import * as R from 'ramda'

const sum = (num) => {
    return num + 10
}

const multiple = (num) => {
    return num * 10
}

const subtract = (num) => {
    return num - 10
}



//----------WITHOUT PIPELINE TRADITIONAL CALLBACK METHOD----------
const res1 = subtract(multiple(sum(10)))

//----------WITH PIPELINE 1---------------
const res2 = pipeline1(10, sum, multiple, subtract)

//----------WITH PIPELINE 2---------------
const res3 = pipeline2(sum, multiple, subtract)(10)

//----------WITH PIPELINE 3---------------
const res4 = pipeline3(sum, multiple, subtract)(10)

//---------- WITH RAMDA PIPELINE---------
const res5 = R.pipe(sum, multiple, subtract)(10)

//---------- WITH RAMDA COMPOSE---------
const res6 = R.compose(subtract, multiple, sum)(10)


console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)