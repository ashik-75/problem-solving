// linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // O (1)
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // O (n)
  append(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let lastNode = this.head;

      while (lastNode.next) {
        lastNode = lastNode.next;
      }

      lastNode.next = node;
    }

    this.size++;
  }

  insert(index, value) {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prevNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }

      node.next = prevNode.next;
      prevNode.next = node;

      this.size++;

      return node;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size || this.isEmpty()) {
      return;
    }

    let currentNode;
    if (index === 0) {
      currentNode = this.head;
      this.head = currentNode.next;

      return currentNode;
    } else {
      let prevNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }

      currentNode = prevNode.next;

      prevNode.next = currentNode.next;

      return currentNode;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.head;

    let values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values.toString();
  }
}

let list = new LinkedList();

// add to start
list.prepend(10);
list.prepend(9);
list.prepend(8);
list.prepend(7);

// add to last
list.append(11);
list.append(12);

// insertion
list.insert(0, 50);
list.insert(4, 99);
console.log("Show All the list Item: ", list.print());
list.insert(7, 999);
console.log("Before remove: ", list.print());
list.remove(4);
console.log("after remove: ", list.print());
