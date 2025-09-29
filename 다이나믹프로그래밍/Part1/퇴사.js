const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];
const arr = input;

const dp = Array.from({ length: N + 2 }).fill(0);

for (let i = 1; i <= N; i++) {
  if (i + arr[i - 1][0] <= N + 1) {
    dp[i + arr[i - 1][0]] = Math.max(
      dp[i + arr[i - 1][0]],
      dp[i] + arr[i - 1][1]
    );
  }

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);
}
console.log(dp[N + 1]);
