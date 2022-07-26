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