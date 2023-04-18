class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }

    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    return this.items.toString();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }

    return null;
  }
}

const queue = new Queue();

// add element to queue

queue.push("Alex");
queue.push("Jonas");
queue.push("EU");
queue.push("Croatia");
// O(1)
console.log(queue.print()); // Alex,Jonas,EU,Croatia

// O(n)
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.print()); // Jonas,EU,Croatia

//
