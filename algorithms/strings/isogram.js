//letters in the string should not repeat

const isogram = (str)=> {
    const val = str.toLowerCase().split('')  //spilt O(n)
    for(i in val){                          //for loop O(n)
        const newVal = [...val]             //spred operator nothing but interation O(n)
        newVal.splice(i, 1)                 //splice O(n)
        if(newVal.includes(val[i])){        //includes O(n)
            return false
        }
    }
    return true                             //O(2n*3n) => O(5n^2)
}

const isogram2 = (str)=>{
    return new Set(str.toLowerCase()).size === str.length       //O(1)
}

const isogram3 = (str)=>{
    return !/(\w).*\1/i.test(str)
}

console.log(isogram3('ajiy'))