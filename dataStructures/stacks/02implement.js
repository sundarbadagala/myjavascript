class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(el) {
    this.items.push(el);
  }
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.peek());
stack.push(7);
stack.push(8);
stack.push(4);
stack.push(3);
stack.print();
stack.pop();
stack.print();
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
