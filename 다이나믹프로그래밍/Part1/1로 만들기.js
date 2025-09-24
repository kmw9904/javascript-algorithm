const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

if (N === 1) {
  console.log(0);
  process.exit(0);
}

const dp = Array.from({ length: N + 1 }).fill(0);

dp[1] = 0;

for (let i = 2; i <= N; i++) {
  let best = dp[i - 1] + 1;

  if (i % 2 === 0) {
    best = Math.min(best, dp[i / 2] + 1);
  }

  if (i % 3 === 0) {
    best = Math.min(best, dp[i / 3] + 1);
  }
  dp[i] = best;
}
console.log(dp[N]);
