const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0],
  M = input[1];

const arr = [];
const result = [];

function dfs(depth) {
  if (depth === M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr.push(i);
    dfs(depth + 1);
    arr.pop();
  }
}

dfs(0);

console.log(result.join("\n"));
