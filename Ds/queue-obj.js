class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    let item = this.items[this.front];

    delete this.items[this.front];

    this.front++;

    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    console.log("REAR: ", this.rear, "FRONT: ", this.front);
    return this.items;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.enqueue(100);
queue.enqueue(400);
queue.dequeue();
queue.dequeue();
queue.enqueue(200);
queue.dequeue();
queue.enqueue(300);
queue.dequeue();
queue.enqueue(300);

console.log(queue.print());
