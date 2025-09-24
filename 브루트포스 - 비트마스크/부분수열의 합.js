const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input[0][0],
  S = input[0][1];
const arr = input[1];
const lst = []
let result = 0;
function dfs(cnt, sum) {
  if (cnt > 0 && sum === S) {
    result += 1;
  }

  if (cnt === N) {
    return;
  }

  for (let i = cnt; i < N; i++) {
    dfs(i + 1, sum + arr[i]);
  }
}

dfs(0, 0);

console.log(result);