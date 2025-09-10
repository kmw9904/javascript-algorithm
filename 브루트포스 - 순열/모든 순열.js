const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
const N = Number(input);

const visited = Array.from({ length: N + 1 }).fill(false);

const result = [];

function dfs(count) {
  if (count === N) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      dfs(count + 1);
      visited[i] = false;
      result.pop();
    }
  }
}

dfs(0);
