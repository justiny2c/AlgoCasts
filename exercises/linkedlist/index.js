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
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
