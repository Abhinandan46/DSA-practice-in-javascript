class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a node
  insert(data) {
    let newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal
  inOrder(node, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.data);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order traversal
  preOrder(node, result = []) {
    if (node) {
      result.push(node.data);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order traversal
  postOrder(node, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.data);
    }
    return result;
  }

  // Search for data
  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (!node) return false;
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return true;
    }
  }

  // Print traversals
  printTraversals() {
    console.log("In-order:", this.inOrder(this.root));
    console.log("Pre-order:", this.preOrder(this.root));
    console.log("Post-order:", this.postOrder(this.root));
  }
}