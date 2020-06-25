const arr = [3, 5, 2, 4, 8, 94, 2, 467, 83, 24, 64, 1];

function heapSort(arr) {
  if (arr.length === 0) return;

  // 大顶堆化
  for (let i = arr.length / 2 - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   [arr[0], arr[i]] = [arr[i], arr[0]];
  //   heapify(arr, i, 0);
  // }

  return arr;
}

function heapify(arr, length, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }
}

console.log(heapSort(arr));
