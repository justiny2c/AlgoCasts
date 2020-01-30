// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // n^2 runtime
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j]; // swap greater value with lesser
        arr[j] = lesser;
      }
    }
  }
  // return sorted array
  return arr;
}

function selectionSort(arr) {
  // n^2 runtime
  // Implement selectionsort
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; // assume the element at "i" is the least in the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j; // update index with new index of lesser value
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i]; // swap values
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  // split into 2 halves
  if (arr.length === 1) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint); // slice from index 0 up until midpoint (not including midpoint)
  const right = arr.slice(midpoint); // slice from midpoint to end

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // take two sorted arrays, and merge into one
  const results = [];

  while (left.length && right.length) {
    // while elements are in both left and right arrays
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right]; // join whatever is left in the left or right array into results
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
