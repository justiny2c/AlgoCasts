// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.array = [];
  }

  add(record) {
    this.array.unshift(record); // add to front
  }

  remove() {
    return this.array.pop(); // remove from end
  }
}

module.exports = Queue;
