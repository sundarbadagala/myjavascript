//===================================================SORT DATA====================================
Array.prototype._sortData=function(field){
    let data = JSON.parse(JSON.stringify(this))
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
Array.prototype._sortAscendingData = function(field){
    return this._sortData(field)
}
//===================================================SORT DESCENDING DATA====================================
Array.prototype._sortDescendingData=function(field){
    let data = JSON.parse(JSON.stringify(this))
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
Array.prototype._addData= function(data){
    return [...this, data]
}
//===================================================UPDATE DATA====================================
