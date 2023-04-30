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

  min(root) {
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

  levelOrder(root) {
    let queue = [];

    queue.push(root);

    while (queue.length) {
      let curr = queue.shift();

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
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(8);
bst.insert(25);
bst.insert(12);
bst.insert(11);
bst.insert(6);

console.log(bst.search(bst.root, 5));
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
bst.levelOrder(bst.root);
