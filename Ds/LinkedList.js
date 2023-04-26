class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; // number of node
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

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

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      let arr = [curr.value];
      while (curr.next) {
        curr = curr.next;
        arr.push(curr.value);
      }

      return arr.toString();
    }
  }
}

const list = new LinkedList();

console.log("isList Empty: ", list.isEmpty());
console.log("List Size: ", list.getSize());
list.prepend(1001);
list.prepend("alan walker");
list.prepend("sara walker");
console.log(list.print());
console.log(list.head);
