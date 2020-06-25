// https://leetcode-cn.com/problems/container-with-most-water/

let height = [9, 8, 6, 2, 5, 4, 8, 3, 7];

// let maxArea = 0;
// for (let i = 0; i < height.length; i++) {
//   for (let j = i + 1; j < height.length; j++) {
//     let area = (j - i) * Math.min(height[j], height[i]);
//     maxArea = Math.max(area, maxArea);
//   }
// }

let maxArea = 0;
for (let i = 0, j = height.length - 1; i < j; ) {
  let minHeight = height[i] < height[j] ? height[i++] : height[j--];
  maxArea = Math.max(maxArea, (j - i + 1) * minHeight);
}

console.log(maxArea);
