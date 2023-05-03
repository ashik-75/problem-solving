class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      let curr = this.head;

      node.next = curr;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let curr = this.head;
        this.head = curr.next;
      }
    }

    this.size--;
  }

  removeFromend() {
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;

      for (let i = 0; i < this.size - 2; i++) {
        curr = curr.next;
      }

      console.log(curr);

      curr.next = null;
      this.tail = curr;
    }

    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  display() {
    if (this.isEmpty()) {
      return null;
    }
    let arr = [];

    let curr = this.head;

    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }

    return arr;
  }
}

let list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(40);

list.append(101);
list.append(102);
list.append(103);
list.append(104);
list.append(105);

list.removeFromend();

console.log(list.display());
