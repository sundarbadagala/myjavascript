class Queue {
  constructor(capacity) {
    this.items = {};
    this.rear = 0;
    this.front = 0;
    this.capacity = capacity;
  }
  add(el) {
    if (this.size() < this.capacity) {
      this.enqueue(el);
    } else {
      this.dequeue(el);
    }
  }
  enqueue(el) {
    this.items[this.rear] = el;
    this.rear++;
  }
  dequeue(el) {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.enqueue(el);
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
    return Object.values(this.items)
  }
}

const queue = new Queue(4);
console.log(queue.size());
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(6);
queue.add(7);
queue.add(8);
queue.add(9);
console.log(queue.print())
console.log(queue.size());
