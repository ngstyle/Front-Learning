const arr = [3, 5, 2, 4, 8, 94, 2, 467, 83, 24, 64, 1];

function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  let j;

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      for (j = i; j >= gap && temp < arr[j - gap]; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
      console.log(i, arr);
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

console.log(shellSort(arr));
