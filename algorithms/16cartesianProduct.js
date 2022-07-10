//Giver two finite non-empty sets, find their cartesian product i.e A*B

const array1= [1,2,3]
const array2= [4,5,6]

//-------------------------------------------map method------------------------------------------
function cartesianProduct(arr1, arr2){
    let arr=[]
    arr1.map(i => {
        arr2.map(j => {
            arr.push([i,j])
        })
    })
    return arr
}
//-------------------------------------------for loop method------------------------------------------
function cartesianProduct2(arr1, arr2){
    let arr=[]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr.push([arr1[i],arr2[j]])
        }
    }
    return arr
}

// BigO notationa O(m*n) m = array1 lenght; n = array2 length 
console.log(cartesianProduct2(array1, array2))