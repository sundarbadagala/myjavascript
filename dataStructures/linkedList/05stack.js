import LinkedList from "./04linkedList.js";

class Stack{
    constructor(){
        this.list = new LinkedList()
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    size(){
        return this.list.getSize()
    }
    push(el){
        return this.list.append(el)
    }
    pop(){
        return this.list.removeFromEnd()
    }
    peek(){
        return this.list.tail.value
    }
    print(){
        return this.list.print()
    }
}

const stack = new Stack()

stack.print()
stack.push(8)
stack.push(6)
stack.push(1)
stack.print()
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.getSize())
console.log(stack.peek())