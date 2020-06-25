// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// https://leetcode-cn.com/problems/move-zeroes/

let arr = [2, 3];

// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     if (j !== i) {
//       arr[j] = arr[i];
//       arr[i] = 0;
//     }
//     j++;
//   }
// }

for (let j = 0, i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    // [arr[i], arr[j]] = [arr[j], arr[i]];
    if (arr[i] != arr[j]) {
      arr[i] = arr[i] ^ arr[j];
      arr[j] = arr[i] ^ arr[j];
      arr[i] = arr[i] ^ arr[j];
    }
    j++;
  }
}

// let j = arr.length - 1;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] !== 0) {
//     if (j !== i) {
//       arr[j] = arr[i];
//       arr[i] = 0;
//     }
//     j--;
//   }
// }

console.log(arr);
