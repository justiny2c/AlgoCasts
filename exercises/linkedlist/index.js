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
    // insert node at head inside the List
    this.head = new Node(data, this.head);
  }

  size() {
    // walk through the list, return number of nudes
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clear(){
      
  }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
