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
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      return this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    // move to left
    if (root.value > newNode.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        return this.insertNode(root.left, newNode);
      }
    } else {
      // move to right
      if (!root.right) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }

    return root;
  }

  search(root, value) {
    if (!root) {
      return null;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value < value) {
        return this.search(root.right, value);
      } else {
        return this.search(root.left, value);
      }
    }
  }

  min(root) {
    if (this.isEmpty()) {
      return null;
    }
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      //   this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  isEmpty() {
    return this.root === null;
  }

  levelOrder(root) {
    let queue = [];

    queue.push(root);

    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}

let bst = new BST();

bst.insert(10);
bst.insert(11);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(9);
bst.insert(2);
bst.insert(4);

bst.delete(5);
// console.log(bst);
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
bst.levelOrder(bst.root);
