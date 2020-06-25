// 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典中的单词。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-ladder
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const beginWord = "hit";
const endWord = "cog";
// const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const wordList = ["hot", "dot", "dog", "lot", "log"];

// const beginWord = "lost";
// const endWord = "miss";
// const wordList = ["most", "mist", "miss", "fist", "fish"];

// const ladderLength = function (beginWord, endWord, wordList) {
//   const queue = [beginWord];

//   const map = new Map();
//   while (queue.length) {
//     const begin = queue.shift();
//     wordList = wordList.filter((v) => v !== begin);

//     if (begin === endWord) {
//       let step = 0;
//       let pre = endWord;

//       while (true) {
//         step++;
//         console.log(pre);

//         if (pre === beginWord) break;
//         pre = map.get(pre);
//       }

//       return step;
//     }

//     for (const word of wordList) {
//       // 有两个字母相同的就加进队列

//       let differences = 0;
//       for (let i = 0; i < word.length && differences < 2; i++) {
//         if (word[i] !== begin[i]) {
//           ++differences;
//         }
//       }

//       if (!map.get(word) && differences === 1) {
//         // console.log(word);
//         queue.push(word);
//         map.set(word, begin);
//       }
//     }
//   }

//   return 0;
// };

const ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList);
  if (!wordList.has(endWord)) return 0;

  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);

  let dist = 1;
  while (beginSet.size) {
    dist++;
    let temp = new Set();
    for (const word of beginSet) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const c = String.fromCharCode("a".charCodeAt(0) + j);

          if (c !== word[i]) {
            let newWord = word.substr(0, i) + c + word.substr(i + 1);

            console.log(endSet, newWord);
            if (endSet.has(newWord)) return dist;

            if (wordList.has(newWord)) {
              temp.add(newWord);
              wordList.delete(newWord);
            }
          }
        }
      }
    }
    beginSet = temp;
    if (beginSet.size > endSet.size) {
      const set = beginSet;
      beginSet = endSet;
      endSet = set;
    }
  }

  return 0;
};

console.log(ladderLength(beginWord, endWord, wordList));
