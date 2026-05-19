//flat array


const arr = [1, 2, 3, [4, [5,[9, 6]]], 7, 8];
// console.log(arr.flat(Infinity))

const main=(val)=>{
    const res = arr.map(item => {
        if(Number.isInteger(item)){
            return item
        }else{
            
        }
    })
}



// console.log(main(arr))