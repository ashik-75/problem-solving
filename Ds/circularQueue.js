class Queue {
  constructor(capacity) {
    this.items = {};
    this.capacity = capacity;
    this.length = 0;
    this.rear = -1;
    this.front = -1;
  }

  enqueue(element) {
    if (this.isFull) {
      return null;
    }

    this.rear = this.rear + 1;
    this.length += 1;

    this.items[this.rear] = element;

    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    this.items[this.front] = null;
    this.length -= 1;

    this.front = (this.front + 1) % this.capacity;

    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
  }

  isFull() {
    return this.length === this.capacity;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }

    return null;
  }
}
