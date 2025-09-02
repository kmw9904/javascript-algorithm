const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0];
const M = input[1];

let arr = [];
let result = [];
const visited = Array.from({ length: N }).fill(false);
function dfs(depth) {
  if (depth === M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(i);
      dfs(depth + 1);
      arr.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(result.join("\n"));
