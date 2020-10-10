// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
} 

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  // size() {
  //   let count = 0;
    
  //   if (this.head) {
  //     count = 1;
  //     let nextNode = this.head.next;
  //     while (nextNode) {
  //       count++;
  //       nextNode = nextNode.next;
  //     }
  //   }

  //   return count;
    
  // }

  size() {
    let count = 0;
    let node = this.head;
    
    while (node) {
      count++;
      node = node.next;
    }

    return count
  }

  getFirst() {
    return this.getAt(0)
  }

  // getLast() {
  //   let node = this.head;
  //   let lastNodeFound = false;

  //   while (!lastNodeFound) {
  //     if (!node.next) { 
  //       lastNodeFound = true;
  //     } else {
  //      node = node.next;  
  //     }
  //   }

  //   return node;
  // }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null;
  }

  removeLast() {

  }

  removeFirst() {                                       
    if (this.head) this.head = this.head.next
  }

  removeLast() {

    if (!this.head) return;

    if (!this.head.next) return this.head = null;
    

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    return previous.next = null
    
  }

  insertLast(data) {
    let node = new Node(data);

    // If there is no node in the list, then insert the node as the list's head
    if (!this.head) {
      this.head = node
    } else {
      this.getLast().next = node;
    }
  }

  getAt(integer) {
    let node = this.head;
    let counter = 0;

    if ((integer > this.size() - 1)) return null;

    while (node) {
      if (counter === integer) return node;

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(integer) {
    // edge case - empty list
    if (!this.size()) return null;

    // edge case - deletes the first node (is size is 1)
    if (integer === 0) return this.head = this.head.next;
    
    // get the node at the index right before integer
    // get the node at the index right after integer
    // point the first node at the second node
    let nodeBefore = this.getAt(integer - 1);
    let nodeAfter = this.getAt(integer + 1);

    nodeBefore.next = nodeAfter;
  }

  insertAt(data, integer) {
    // Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.	

    let node = new Node(data);

    // Edge case - if the list is empty
    if (!this.head) return this.head = node;

    // Edge case - if trying to insert node at 0 index
    if (integer === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let nodeBefore = this.getAt(integer - 1);
    let nodeAfter = this.getAt(integer);

    // If index is out of bound
    if (!nodeBefore || !nodeAfter) {
      this.getLast().next = node
    } else {
      nodeBefore.next = node;
      node.next = nodeAfter;
    }
  }

  forEach(fx) {
    // Calls the provided function with every node of the chain
    let counter = 0;

    while (this.getAt(counter)) {
      fx(this.getAt(counter))
      counter++;
    }
  }


}

module.exports = { Node, LinkedList };
