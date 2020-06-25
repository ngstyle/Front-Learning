// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍

let nums = [2, 6, 11, 15, 8, 1],
  target = 9;

// 1. 暴力法
// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         arr[0] = i;
//         arr[1] = j;
//         return arr;
//       }
//     }
//   }

//   return arr;
// };

// 2.两遍哈希表
// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement) && map.get(complement) !== i) {
//       return [i, map.get(complement)];
//     }
//   }
//   return [];
// };

// 2.一遍哈希表
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
console.log(twoSum(nums, target));

async () => {};
