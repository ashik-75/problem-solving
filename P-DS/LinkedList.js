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

  //   O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
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
      return null;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);

      let curr = this.head;

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      node.next = curr.next;
      curr.next = node;
      this.size++;

      return node;
    }
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      let curr = this.head;
      this.head = curr.next;
    } else {
      let curr = this.head;

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      let deletedNode = curr.next;
      curr.next = deletedNode.next;
    }
    this.size--;
  }

  print() {
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

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

let list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
// list.append(40);
// list.append(50);
list.prepend(44);
list.append(2);

list.insert(3, 101);

list.delete(1);
console.log(list.getSize());
console.log(list.print());
