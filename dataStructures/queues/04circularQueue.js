class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.rear = -1 ;
    this.front = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = el;
      this.currentLength++;
      if (this.front === -1) this.front++
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  size() {
    return this.currentLength;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }
  print() {
    if (this.isEmpty()) {
      console.log(null);
    } else {
      let str = "";
      let i;
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ",";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new Queue(4);

queue.print();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.peek());
queue.print();
queue.dequeue();
queue.dequeue();
console.log(queue.size())
queue.print();
queue.enqueue(10);
queue.enqueue(12);
queue.enqueue(17);
queue.print();
console.log(queue.peek());
console.log(queue.size())
