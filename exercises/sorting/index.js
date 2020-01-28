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

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
