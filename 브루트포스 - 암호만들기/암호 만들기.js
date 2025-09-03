const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

const [L, C] = input.shift().map((e) => Number(e));

const arr = input.shift();

let vowel = 0;
let consonant = 0;

const vowels = ["a", "e", "i", "o", "u"];
let result = [];
let answer = [];

arr.sort();

function dfs(start, count) {
  if (vowel >= 1 && consonant >= 2 && count === L) {
    answer.push(result.join(""));
    return;
  }

  for (let i = start; i < C; i++) {
    if (vowels.includes(arr[i])) {
      vowel += 1;
      result.push(arr[i]);
      dfs(i + 1, count + 1);
      vowel -= 1;
      result.pop();
    } else {
      consonant += 1;
      result.push(arr[i]);
      dfs(i + 1, count + 1);
      consonant -= 1;
      result.pop();
    }
  }
}

dfs(0, 0);

console.log(answer.join("\n"));
