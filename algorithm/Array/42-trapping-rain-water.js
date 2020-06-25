// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// https://leetcode-cn.com/problems/trapping-rain-water/

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let min = 0,
  max = 0;
let l = 0,
  r = height.length - 1;

let res = 0;
while (l < r) {
  min = height[height[l] < height[r] ? l++ : r--];
  max = Math.max(min, max);
  res += max - min;
}

console.log('res = ' + res);
