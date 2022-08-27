class Queue {
    constructor(){
        this.items = []
    }
    enqueue(el){
        this.items.push(el)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(this.isEmpty()) return null
        return this.items[0]

    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()

console.log(queue.isEmpty())
console.log(queue.peek())
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())

//Note : here we using shift method to remove element, its time complexity O(n) so it is not suggestible