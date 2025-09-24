const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = BigInt(input);

const dp = Array.from({ length: Number(N) + 1 }).fill(0n);

dp[1] = 1n;

if (N === 1n) {
  console.log(1);
  process.exit();
}

for (let i = 2; i <= Number(N); i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

console.log(dp[Number(N)].toString());
