const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const N = input[0][0],
  M = input[0][1],
  arr = input[1];

arr.sort((a, b) => a - b);

const lst = [];
const result = [];

function dfs(start, depth) {
  if (depth === M) {
    result.push(lst.join(" "));
    return;
  }

  for (let i = start; i < N; i++) {
    lst.push(arr[i]);
    dfs(start, depth + 1);
    lst.pop(arr[i]);
  }
}

dfs(0, 0);

console.log(result.join("\n"));
