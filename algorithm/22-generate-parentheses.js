// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// https://leetcode-cn.com/problems/generate-parentheses/

const generateParenthesis = function (n) {
  const result = [];

  function generate(left, right, n, s) {
    if (left === n && right === n) {
      result.push(s);
      return;
    }

    console.log(left, s);
    if (left < n) generate(left + 1, right, n, s + "(");

    if (right < n) generate(left, right + 1, n, s + ")");
  }
  return result;
};

console.log(generateParenthesis(3));
