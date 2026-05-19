class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.front = 0;
    this.rear = 0;
  }
  print() {
    console.log(this.items);
  }
  size() {
    console.log(this.items.length);
  }
  isEmpty() {
    return this.capacity - this.currentLength === 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  enqueue(el) {
    if (!this.isFull()) {
      this.rear = this.rear % this.capacity;
      this.items[this.rear] = el;
      this.rear++;
      this.currentLength++;
    }
  }
  dequeue() {
    this.front = this.front % this.capacity;
    this.items[this.front] = null;
    this.front++;
    this.currentLength--;
  }
}


const queue = new Queue(5)

main.print()
main.enqueue(1)
main.enqueue(2)
main.enqueue(3)
main.enqueue(4)
main.enqueue(5)
main.enqueue(6)
main.enqueue(7)
main.enqueue(8)
main.print()
main.dequeue()
main.print()
main.enqueue(9)
main.print()
main.dequeue()
main.dequeue()
main.print()
main.enqueue(10)
main.print()