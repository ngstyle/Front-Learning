// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 上图为 8 皇后问题的一种解法。

// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/n-queens
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const solveNQueens = function (n) {
  let result = [];
  let solves = [];

  function calQueens(row) {
    if (row === n) {
      solves.push(printQueens());
      return;
    }

    for (let col = 0; col < n; col++) {
      if (check(row, col)) {
        result[row] = col;
        calQueens(row + 1);
      }
    }
  }

  function check(row, col) {
    let leftTop = col - 1,
      rightTop = col + 1;

    for (let i = row - 1; i >= 0; i--) {
      if (result[i] === col) return false;

      if (leftTop >= 0 && result[i] === leftTop) return false;
      if (rightTop < n && result[i] === rightTop) return false;

      leftTop--;
      rightTop++;
    }

    return true;
  }

  function printQueens() {
    // console.count("printQueens");
    const solve = [];
    for (let row = 0; row < n; row++) {
      let content = "";
      for (let col = 0; col < n; col++) {
        if (result[row] === col) content += "Q";
        else content += ".";
      }
      // console.log(content);
      solve.push(content);
    }
    // console.log("");

    return solve;
  }

  calQueens(0);

  return solves;
};

console.log(solveNQueens(4));
