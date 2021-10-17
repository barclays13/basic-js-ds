const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


module.exports = class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
    
  }

  add( data ) {
    const newNode = new Node(data); 
    this.tree === null ? this.tree = newNode : this.addNode(this.tree, newNode);
  }

  addNode(root, newNode) {
    if (newNode.data < root.data) {
      root.left === null ? root.left = newNode : this.addNode(root.left, newNode);
    } else if (newNode.data > root.data) {
      root.right === null ? root.right = newNode : this.addNode(root.right, newNode);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

// const bin = new BinarySearchTree();
// console.log('bin.add(2)', bin.add(2))
// console.log('bin.add(3)', bin.add(3))
// console.log('bin.add(4)', bin.add(4))
// console.log('bin.add(5)', bin.add(5))