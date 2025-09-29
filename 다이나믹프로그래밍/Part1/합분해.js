const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e));

const K = input.pop();
const N = input.pop();

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }).fill(0)
);

// 한개로 숫자 하나를 만드는 방법은 1
for (let i = 1; i <= N; i++) {
  dp[i][1] = 1;
}

// 몇개를 써도 0을 만드는 방법은 1
for (let i = 1; i <= K; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}

console.log(dp[N][K] % 1000000000);
