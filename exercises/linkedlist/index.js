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

    // or
    // this.insertAt(data, 0);
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
    return this.head; // this.getAt(0)
    
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

    // return this.getAt(this.size()-1)
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // There are existing nodes
      last.next = new Node(data);
    } else {
      // Chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    // index 0 is first Node = this.head
    // return entire Node
    let node = this.head;
    let counter = 0;
    while (node) {
      if (index == counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null; // couldn't find an index while running the while loop above (index out of range)
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index == 0) {
      this.head = this.head.next;
    }

    let prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) {
      return null;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index == 0) {
      this.head = new Node(data, this.head);
    }

    let prevNode = this.getAt(index - 1) || this.getLast();
    let newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
