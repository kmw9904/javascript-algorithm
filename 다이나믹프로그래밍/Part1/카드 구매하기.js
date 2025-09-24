const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];

const arr = input[0];

const dp = Array.from({ length: N + 1 }).fill(0);
dp[1] = arr[0];
for (let i = 2; i <= N; i++) {
  let mx = arr[i - 1];
  for (let j = 1; j < i; j++) {
    mx = Math.max(mx, dp[i - j] + arr[j - 1]);
  }

  dp[i] = mx;
}

console.log(dp[N]);
