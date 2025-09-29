const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const arr = input.pop();
const N = input.pop()[0];

const dp = Array.from({ length: N }).fill(0);

dp[0] = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
}

let result = -Infinity;
for (let i = 0; i < N; i++) {
  if (result < dp[i]) {
    result = dp[i];
  }
}

console.log(result);
