class List{
    constructor(){
        this.items = []
        this.size =0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    append(el){
        this.items.push(el)
        this.size++
    }
    prepend(el){
        this.items.unshift(el)
        this.size++
    }
    print(){
        console.log(this.items)
    }
}

const list = new List()
console.log(list.getSize())
list.append(8)
list.append(9)
list.append(10)
list.print()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.print()