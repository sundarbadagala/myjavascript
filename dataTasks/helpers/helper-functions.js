export function sortData(data, field){
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

