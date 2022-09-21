import LinkedList from "./04linkedList.js";

class Queue{
    constructor(){
        this.list = new LinkedList()
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    size(){
        return this.list.getSize()
    }
    enqueue(el){
        return this.list.append(el)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    print(){
        return this.list.print()
    }
}

const queue = new Queue()

queue.enqueue(8)
queue.enqueue(3)
queue.enqueue(5)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())