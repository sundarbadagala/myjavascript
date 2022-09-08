function Stack() {
  this.items = [];
  this.size = () => {
    return this.items.length;
  };
  this.isEmpty = () => {
    return this.items.length === 0;
  };
  this.push = (el) => {
    this.items.push(el);
  };
  this.pop = () => {
    return this.items.pop();
  };
  this.peek = () => {
    return this.items[this.items.length - 1];
  };
  this.print = () => {
    if (this.isEmpty()) {
      console.log(null);
    } else {
      console.log(this.items.toString());
    }
  };
}

const stack = new Stack();

stack.print();
stack.push(7);
stack.push(8);
stack.push(9);
stack.print();
