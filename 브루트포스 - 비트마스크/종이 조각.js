const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const ar = input.shift();

const N = ar[0];
const M = ar[1];

const arr = input.map((e) => e.toString().split(""));

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }).fill(false)
);

function dfs() {
  
}
console.log(N, M, arr);
