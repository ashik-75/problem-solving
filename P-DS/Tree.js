class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      // move to left of the tree
      if (!root.left) {
        root.left = newNode;
      } else {
        return this.insertNode(root.left, newNode);
      }
    } else {
      // move to right of the tree
      if (!root.right) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    // console.log(root)
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }
}

let bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(bst.root, 5));
