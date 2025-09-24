const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

const N = input.shift();
let mx = 0;
for (a of input) {
  if (mx < a) mx = a;
}

const dp = Array.from({ length: mx + 1 }).fill(0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= mx; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

const result = [];

for (a of input) {
  result.push(dp[a]);
}

console.log(result.join("\n"));
