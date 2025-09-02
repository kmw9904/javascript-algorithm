const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const N = input[0][0],
  M = input[0][1];

const arr = input[1];
arr.sort((a, b) => a - b);

const lst = [];
const result = [];

const visited = Array.from({ length: arr[N - 1] }).fill(false);

function dfs(depth) {
  if (depth === M) {
    result.push(lst.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[arr[i]]) {
      visited[arr[i]] = true;
      lst.push(arr[i]);
      dfs(depth + 1);
      lst.pop(arr[i]);
      visited[arr[i]] = false;
    }
  }
}

dfs(0);

console.log(result.join("\n"));
