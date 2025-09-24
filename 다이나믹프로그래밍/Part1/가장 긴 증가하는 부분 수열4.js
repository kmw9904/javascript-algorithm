const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift(0)[0];
const arr = input[0];

const lst = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  lst[i].push(arr[i]);
}

const dp = Array.from({ length: N }).fill(1);

let mx = 0;

let mx_idx = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      if (dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        lst[i] = lst[j].concat(arr[i]);

        if (mx < dp[i]) {
          mx = dp[i];
          mx_idx = i;
        }
      } 
    }
  }
}

console.log(dp[mx_idx]);
console.log(lst[mx_idx].join(" "));