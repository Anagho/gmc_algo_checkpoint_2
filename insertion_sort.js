// Function to implement Insertion Sort
const insertionSort = (arr) => {
    const arrLength = arr.length;

    // Iterate through the array starting from the second element
    for (let i = 1; i < arrLength; i++) {
      // Pick the current element
      let currentElement = arr[i];

      // Initialize j to compare with the sorted section
      let j = i - 1;

      // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j]; // Shift element to the right
        j--; // Move to the previous element
      }

      // Place the current element at its correct position
      arr[j + 1] = currentElement;
    }

    return arr; // Return the current array
}

// Example:
const array = [12, 11, 13, 5, 6, 9, 0]
console.log("Original array:", array);

// sorted array
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);