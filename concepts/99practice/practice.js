const rows=[
    {name:'vijay', age:20, color:'red'},
    {name:'ram', age:21, color:'blue'},
    {name:'raj', age:20, color:'green'},
    {name:'vinay', age:80, color:'red'},
    {name:'kiran', age:77, color:'orange'},
    {name:'karun', age:52, color:'red'},
]
const ids=['name']
const filterValue='ram'

const text = (rows, ids, filterValue) => {
    rows = rows.filter(row => {
      return ids.some(id => {
        const rowValue = row.values[id]
        return String(rowValue)
          .toLowerCase()
          .includes(String(filterValue).toLowerCase())
      })
    })
    return rows
}

console.log(text(rows, ids, filterValue))

