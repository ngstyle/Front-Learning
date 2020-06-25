const arr = [3, 5, 2, 4, 8, 94, 2, 467, 83, 24, 64, 1];

function mergeSort(arr, left, right) {
  if (right <= left) return;

  let mid = (left + right) >> 1;
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  merge(arr, left, mid, right);
  return arr;
}

function merge(arr, left, mid, right) {
  let temp = []; // length: right - left + 1

  let i = left,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= right) {
    temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  for (let p = 0; p < temp.length; p++) {
    arr[left + p] = temp[p];
  }
}

console.log(mergeSort(arr, 0, arr.length - 1));
