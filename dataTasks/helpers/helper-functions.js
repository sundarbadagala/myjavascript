//===================================================SORT DATA====================================
export function sort_data(data, field){
    let flag
    do{
        flag = false
        for(let i=0; i < data.length; i++){
            const d1 = data[i]?.[field]
            const d2 = data[i+1]?.[field]
            if(d1 > d2){
                let temp = data[i]
                data[i] = data[i+1]
                data[i+1] = temp
                flag = true
            }
        }
    }while(flag)
    return data
}
//===================================================SORT ASCENDING DATA====================================
export function sort_ascending_data(data, field){
    return sort_data(data, field)
}
//===================================================SORT DESCENDING DATA====================================
export function sort_descending_data(data, field){
    let flag
    do{
        flag = false
        for(let i=0; i < data.length; i++){
            const d1 = data[i]?.[field]
            const d2 = data[i+1]?.[field]
            if(d1 < d2){
                let temp = data[i]
                data[i] = data[i+1]
                data[i+1] = temp
                flag = true
            }
        }
    }while(flag)
    return data
}
//===================================================ADD DATA====================================
export function add_data(data, reqBody){
    data.push(reqBody)
    return data
}
//===================================================ADD DATA====================================
export function add_data_element(data, element){
    const resData = []
    for(let i=0; i<data.length; i++){
        resData[i] = Object.assign(data[i], element)
    }
    return resData
}
//===================================================UPDATE DATA====================================
export function update_data(data, reqBody, field){
    let isAlreadyExist = false
    for (let i = 0; i < data.length; i++) {
        if(data[i]?.[field] === reqBody[field]){
            isAlreadyExist = true
        }
    }
    if(isAlreadyExist){
        for (let i = 0; i < data.length; i++) {
            if(data[i]?.[field] === reqBody[field]){
                data[i] = reqBody
            }
        }
    }else{
        data.push(reqBody)
    }
    return data
}
//===================================================SEARCH DATA==================================
export function search_data(data, field, value){
    const resData=[]
    for (let i = 0; i < data.length; i++) {
        if(data[i]?.[field]?.toString().toLowerCase() === value.toString().toLowerCase()){
            resData.push(data[i])
        }
    }
    return resData
}
//===================================================SEARCH DATA VALUE==================================
export function search_data_value(data, field, searchValue, getValue){
    let resData=[]
    for (let i = 0; i < data.length; i++) {
        if(data[i]?.[field]?.toString().toLowerCase() === searchValue.toString().toLowerCase()){
            resData.push(data[i]?.[getValue])
        }
    }
    return resData
}
//===================================================IS SAME OBJECTS==================================
export function is_same_objects(obj1, obj2){
    const obj1Keys = Object.keys(obj1)
    for(let p=0; p<obj1Keys.length; p++){
        
        // const isObject = o1[p] instanceof Object && o2[p] instanceof Object && !Array.isArray(o1[p]) && !Array.isArray(o2[p])
        // const isArray = Array.isArray(o1[p]) && Array.isArray(o2[p])
        // if(isObject){
        //     isSameObjects(o1[p], o2[p])
        // }else if(isArray){
        //     if(!isSameArrays(o1[p], o2[p]))
        //     return false
        // }
        // else{
        //     if(JSON.stringify(o1[p]) !== JSON.stringify(o2[p])){
        //         return false;
        //     }
        // }
    }
    // for(var p in o2){
    //     const isObject = o1[p] instanceof Object && o2[p] instanceof Object && !Array.isArray(o1[p]) && !Array.isArray(o2[p])
    //     const isArray = Array.isArray(o1[p]) && Array.isArray(o2[p])
    //     if(isObject){
    //         isSameObjects(o1[p], o2[p])
    //     }else if(isArray){
    //         if(!isSameArrays(o1[p], o2[p]))
    //         return false
    //     }else{
    //         if(JSON.stringify(o1[p]) !== JSON.stringify(o2[p])){
    //             return false;
    //         }
    //     }
    // }
    // return true;
}
//===================================================IS SAME ARRAYS==================================
export function is_same_arrays(arr1, arr2){
    return 'hello'
}