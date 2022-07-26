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
//===================================================APPEND DATA====================================
export function appendData(data, reqBody, field){
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
//===================================================ADD DATA====================================
export function addData(data, reqBody){
    return [...data, reqBody]
}
//===================================================SEARCH DATA==================================
export function searchData(data, field, value){
    return data.filter(item => item[field]?.toString().toLowerCase().includes(value.toString().toLowerCase()))
}