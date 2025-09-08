const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];
const arr = input;

let answer = 0;

function dfs(start, sum) {
  if (start >= N) {
    answer = Math.max(answer, sum);
    return;
  }

  let moved = false;

  for (let i = start; i < N; i++) {
    if (i + arr[i][0] <= N) {
      moved = true;
      dfs(i + arr[i][0], sum + arr[i][1]);
    }
  }

  if (!moved) {
    answer = Math.max(answer, sum);
  }
}

dfs(0, 0);

console.log(answer);
