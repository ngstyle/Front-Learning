const arr = [3, 5, 2, 4, 8, 94, 2, 467, 83, 24, 64, 1];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
