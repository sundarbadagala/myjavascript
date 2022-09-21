class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(el){
        const node = new Node(el)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(el){
        const node = new Node(el)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(el, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(el)
        }else{
            const node = new Node(el)
            let prev = this.head
            for(let i=0; i <  index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    remove(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeValue(el){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === el){
            this.head = this.head.next
            this.size--
            return el
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== el){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return el
            }
            return null
        }
    }
    search(el){
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head
        for(let i=0; i< this.getSize(); i++){
            if(curr.value === el){
                return i
            }
            curr = curr.next
        }
        return -1
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print(){
        if(this.isEmpty()){
            console.log('empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next 
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.append(10)
list.append(9)
list.append(8)
// list.print()
// console.log(list.remove(3))
// list.print()
// console.log(list.removeValue(2))

// console.log(list.getSize())

// list.search()


list.append(10)
list.print()
// console.log(list.search(10))
list.reverse()
list.print()