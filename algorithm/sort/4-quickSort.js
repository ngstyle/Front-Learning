const arr = [3, 5, 2, 4, 8, 94, 2, 467, 83, 24, 64, 1];

function quickSort(arr, begin, end) {
  if (end <= begin) return;

  const pivot = partition(arr, begin, end);
  quickSort(arr, begin, pivot - 1);
  quickSort(arr, pivot + 1, end);

  return arr;
}

function partition(arr, begin, end) {
  let pivot = end;
  // 小于pivot 的元素个数
  let counter = begin;
  for (let i = begin; i < end; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[counter]] = [arr[counter], arr[i]];
      counter++;
    }
  }

  [arr[pivot], arr[counter]] = [arr[counter], arr[pivot]];

  return counter;
}

console.log(quickSort(arr, 0, arr.length - 1));
