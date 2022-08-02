//===================================================SORT DATA====================================
export function sortData(data, field){
    data = JSON.parse(JSON.stringify(data))
    const sortedData= [...data].sort((a,b)=>{
        let a1 = a[field]
        let b1 = b[field]
        if(a1 > b1){
            return 1
        }else if(a1 < b1){
            return -1
        }else{
            return 0
        }
    })
    return sortedData
}
//===================================================SORT ASCENDING DATA====================================
export function sortAscendingData(data, field){
    return sortData(data, field)
}
//===================================================SORT DESCENDING DATA====================================
export function sortDescendingData(data, field){
    data = JSON.parse(JSON.stringify(data))
    const sortedData= [...data].sort((a,b)=>{
        let a1 = a[field]
        let b1 = b[field]
        if(a1 > b1){
            return -1
        }else if(a1 < b1){
            return 1
        }else{
            return 0
        }
    })
    return sortedData
}
//===================================================ADD DATA====================================
export function addData(data, reqBody){
    return [...data, reqBody]
}
//===================================================UPDATE DATA====================================
export function updateData(data, reqBody, field){
    const isAlreadyExist =  data.some(item => item[field] === reqBody[field])
    if(isAlreadyExist){
        return data.map(item => {
            if(item[field] === reqBody[field]){
                return {...item, ...reqBody}
            }
            return item
        })
    }else{
        return [...data, reqBody]
    }
}

//===================================================SEARCH DATA==================================
export function searchData(data, field, value){
    return data.filter(item => item[field]?.toString().toLowerCase().includes(value.toString().toLowerCase()))
}
//===================================================SEARCH DATA VALUE==================================
export function searchDataValue(data, field, searchValue, getValue ){
    return data.filter(item => item[field]?.toString().toLowerCase().includes(searchValue.toString().toLowerCase())).map(item => item[getValue] )
}
//===================================================IS DATA AVAILABLE==================================
export function isDataAvailabe(data, field){
    return data.some(item => isSameObjects(item, field))
}
//===================================================IS SAME OBJECTS==================================
export function isSameObjects(o1, o2){
    for(var p in o1){
        const isObject = o1[p] instanceof Object && o2[p] instanceof Object && !Array.isArray(o1[p]) && !Array.isArray(o2[p])
        const isArray = Array.isArray(o1[p]) && Array.isArray(o2[p])
        if(isObject){
            isSameObjects(o1[p], o2[p])
        }else if(isArray){
            if(!isSameArrays(o1[p], o2[p]))
            return false
        }
        else{
            if(JSON.stringify(o1[p]) !== JSON.stringify(o2[p])){
                return false;
            }
        }
    }
    for(var p in o2){
        const isObject = o1[p] instanceof Object && o2[p] instanceof Object && !Array.isArray(o1[p]) && !Array.isArray(o2[p])
        const isArray = Array.isArray(o1[p]) && Array.isArray(o2[p])
        if(isObject){
            isSameObjects(o1[p], o2[p])
        }else if(isArray){
            if(!isSameArrays(o1[p], o2[p]))
            return false
        }else{
            if(JSON.stringify(o1[p]) !== JSON.stringify(o2[p])){
                return false;
            }
        }
    }
    return true;
}
//===================================================IS SAME ARRAYS==================================
export function isSameArrays(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i in arr1){
        if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
            if(!isSameArrays(arr1[i], arr2[i]))
                return false
        }else if(arr1[i] instanceof Object && arr2[i] instanceof Object){
            if(!isSameObjects(arr1[i], arr2[i]))
            return false
        }else{
            if(arr1[i] !== arr2[i]){
                return false
            }
        }
    }
    return true
}