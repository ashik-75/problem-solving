class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  print() {
    return this.items.toString();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.pop();
console.log(stack.print());
console.log(stack.peek());
