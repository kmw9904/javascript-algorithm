const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

const N = input.shift();
const arr = input;

let mx = 0;

for (let a of arr) {
  if (mx < a) mx = a;
}

if (mx === 3) {
  console.log(3);
  process.exit(0);
} else if (mx <= 2) {
  console.log(1);
  process.exit(0);
}

const dp = Array.from({ length: mx + 1 }, () =>
  Array.from({ length: 4 }).fill(0)
);

dp[1][1] = 1;

dp[2][2] = 1;

dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= mx; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % 1000000009;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % 1000000009;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % 1000000009;
}

const result = [];
for (let a of arr) {
  let answer = 0;
  for (let i = 1; i <= 3; i++) {
    answer += dp[a][i] % 1000000009;
  }

  result.push(answer % 1000000009);
}

console.log(result.join("\n"));
