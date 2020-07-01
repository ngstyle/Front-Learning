const generateParenthesis = function (n) {
  let results = [];

  function ge(left, right, s) {
    if (left === n && right === n) {
      // console.log(s);
      if (isValid(s)) results.push(s);
      return;
    }

    if (left < n) ge(left + 1, right, s + "(");

    if (right < n) ge(left, right + 1, s + ")");
  }
  ge(0, 0, "");

  function isValid(s) {
    const map = new Map([["(", ")"]]);
    const stack = ["?"];
    for (const c of s) {
      if (map.has(c)) stack.push(c);
      else if (map.get(stack.pop()) !== c) return false;
    }

    return stack.length === 1;
  }

  return results;
};

console.log(generateParenthesis(3));
