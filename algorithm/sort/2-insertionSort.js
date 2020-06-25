const arr = [3, 5, 2, 4, 8, 94, 2, 467, 83, 24, 64, 1];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    let current = arr[i];

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }

    arr[preIndex + 1] = current;
  }

  return arr;
}

console.log(insertionSort(arr));
