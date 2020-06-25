// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// https://leetcode-cn.com/problems/two-sum/ 简单版 两数只和
// https://leetcode-cn.com/problems/3sum/

let nums = [-1, 0, 1, 2, -1, -4, -1, 2, 2, 2];
// 1. 暴力求解，三数之和可以转换成两数之和的变本 a+b = target, 即a+b=-c; 需三重循环，时间复杂度 O(n^3)
// function threeSum(nums) {
//   let result = [];
//   let map = new Map();
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[j] + nums[k] + nums[i] === 0) {
//           let arr = [nums[i], nums[j], nums[k]];
//           let key = arr.sort((a, b) => a - b).reduce((p, c) => p + c, '');
//           if (!map.has(key)) {
//             result.push([nums[i], nums[j], nums[k]]);
//           }
//           map.set(key, arr);
//         }
//       }
//     }
//   }

//   return result;
// }

// 2. Hash
// let threeSum = function (nums) {
//   let res = [];
//   let hash = {};
//   for (let i = 0; i < nums.length - 2; i++) {
//     // 每个人
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       // 依次拉上其他每个人
//       if (hash[nums[j]] !== undefined) {
//         // 已经有合适自己的两人组
//         res.push([nums[j]].concat(hash[nums[j]]));
//         hash[nums[j]] = undefined;
//       } else {
//         // 没有合适自己的两人组
//         let mark = 0 - nums[i] - nums[j];
//         hash[mark] = [nums[i], nums[j]];
//       }
//     }
//   }
//   return res;
// };

let threeSum = function (nums) {
  // 1. sort array
  nums = nums.sort((a, b) => a - b);

  let res = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k >= 1 && nums[k] === nums[k - 1]) continue;

    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
      let s = nums[k] + nums[i] + nums[j];
      if (s === 0) {
        res.push([nums[k], nums[i], nums[j]]);
        i++;
        while (nums[i] === nums[i - 1] && i < j) {
          i++;
        }
        j--;
        while (nums[j] === nums[j + 1] && i < j) {
          j--;
        }
      } else if (s < 0) {
        i++;
        while (nums[i] === nums[i - 1] && i < j) {
          i++;
        }
      } else {
        j--;
        while (nums[j] === nums[j + 1] && i < j) {
          j--;
        }
      }
    }
  }
  return res;
};

console.log(threeSum(nums));
