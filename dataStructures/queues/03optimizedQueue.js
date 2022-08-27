class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(el) {
    this.items[this.rear] = el;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  size() {
    return this.rear - this.front;
  }
  peek() {
    return this.items[this.front];
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(7)
queue.enqueue(3)
console.log(queue.isEmpty())
console.log(queue.size())
queue.print()
queue.dequeue()
queue.dequeue()
console.log(queue.size())
queue.print()
console.log(queue.peek())
