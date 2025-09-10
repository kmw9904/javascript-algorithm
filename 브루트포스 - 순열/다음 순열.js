const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];
const arr = input.shift();

let i = N - 2;
while (i >= 0 && arr[i] >= arr[i + 1]) i--;

if (i < 0) {
  console.log(-1);
  process.exit(0);
}

let j = N - 1;
while (arr[j] <= arr[i]) j--;

[arr[i], arr[j]] = [arr[j], arr[i]];

let l = i + 1,
  r = N - 1;
while (l < r) {
  [arr[l], arr[r]] = [arr[r], arr[l]];
  l++, r--;
}

console.log(arr.join(" "));
