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

  addNode( tree, newNode ) {
    if (newNode.data < tree.data) {
      tree.left === null ? tree.left = newNode : this.addNode(tree.left, newNode);
    } else if (newNode.data > tree.data) {
      tree.right === null ? tree.right = newNode : this.addNode(tree.right, newNode);
    }
  }

  has( data ) {
    return this.getHas(this.tree, data)
  }

  getHas( tree, data ) {
    if (tree.data === data) {
      return true;
    } else if (tree.data > data) {
      return tree.left === null ? false : this.getHas(tree.left, data);
    } else if (tree.data < data) {
      return tree.right === null ? false : this.getHas(tree.right, data);
    }
  }

  find( data ) {
    return this.getFind(this.tree, data)
  }

  getFind( tree, data ) {
    if (tree === null) {
      return null;
    } else if (tree.data === data) {
      return tree;
    } else if (tree.data > data) {
      return tree.left === null ? null : this.getFind(tree.left, data);
    } else if (tree.data < data) {
      return tree.right === null ? null : this.getFind(tree.right, data);
    }
  }

  remove( data ) {
    this.tree = this.removeNode(this.tree, data);
  }

  removeNode( tree, data ) {

    const getNode = ( node ) =>  node.left === null ? node : getNode( node.left );

    if ( tree === null) {
      return null;
    } else if ( data > tree.data) {
      tree.right = this.removeNode( tree.right, data );
      return tree;
    } else if ( data < tree.data) {
      tree.left = this.removeNode( tree.left, data );
      return tree;
    } else {
      if ( tree.left === null && tree.right === null ) return null;
      if ( tree.right === null ) {
        return tree.left;
      } else if ( tree.left === null ) {
        return tree.right;
      } 

      const newNode = getNode( tree.right );
      tree.data = newNode.data;
      tree.right = this.removeNode( tree.right, newNode.data );
      return tree;
    }
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

// bin.add(2)
// bin.add(1)
// bin.add(3)
// bin.add(4)
// bin.add(5)
// console.log('bin.has(5)', bin.has(3))
// console.log('bin.remove(5)', bin.remove(3))
