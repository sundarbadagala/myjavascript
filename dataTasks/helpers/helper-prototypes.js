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
//===================================================ADD DATA====================================
Array.prototype._addDataElement = function(element){
    for(let i=0; i < this.length; i++){
        this[i] = {...this[i], ...element}
    }
    return this
}
//===================================================UPDATE DATA====================================
Array.prototype._updateData = function(reqBody, field){
    const isAlreadyExist = this.some(item => item[field] === reqBody[field])
    if(isAlreadyExist){
        return this.map(item => {
            if(item[field] === reqBody[field]){
                return {...item, ...reqBody}
            }
            return item
        })
    }else{
        return [...this, reqBody]
    }
}
//===================================================SEARCH DATA==================================
Array.prototype._searchData = function(field, value){
    return this.filter(item => item[field]?.toString().toLowerCase().includes(value.toString().toLowerCase()))
}
//===================================================SEARCH DATA VALUE==================================
Array.prototype._searchDataValue = function(field, searchValue, getValue){
    return this.filter(item => item[field]?.toString().toLowerCase().includes(searchValue.toString().toLowerCase())).map(item => item[getValue] )
}