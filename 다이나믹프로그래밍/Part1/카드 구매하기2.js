const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];

const arr = input[0];

const dp = Array.from({ length: N + 1 }).fill(Infinity);

dp[1] = arr[0];

for (let i = 2; i <= N; i++) {
  let mn = arr[i - 1];

  for (let j = 1; j < i; j++) {
    mn = Math.min(mn, dp[i - j] + arr[j - 1]);
  }

  dp[i] = mn;
}

console.log(dp[N]);
