const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: 10 }).fill(0)
);

let result = 0;
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
  result += 1;
}

if (N <= 1) {
  console.log(result);
  process.exit(0);
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j + 1] % 1000000000;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][j - 1] % 1000000000;
    } else {
      dp[i][j] =
        ((dp[i - 1][j - 1] % 1000000000) + (dp[i - 1][j + 1] % 1000000000)) %
        1000000000;
    }
  }
}

result = 0;
for (let j = 0; j <= 9; j++) {
  result += dp[N][j] % 1000000000;
}

console.log(result % 1000000000);
