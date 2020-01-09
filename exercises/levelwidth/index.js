// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // root is a node we are working with
  // typically with "width", we are thinking about a breadth first traversal
  let arr = [root, 's'];
  let counters = [0];

  while (arr.length > 1) {
    const node = arr.shift(); // remove first element in arr

    if (node === 's') {
      counters.push(0);
      arr.push('s'); // push "s" back into end of arr
    } else {
      arr.push(...node.children); // push all of node's children
      counters[counters.length - 1]++; // find last element in counters and increment by 1
    }
  }
  // return width of each level in an array
  return counters;
}

module.exports = levelWidth;
