const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

let prev = 1;
let current = 1;

for (let i = 2; i <= N; i++) {
  const next = 2 * prev + current;

  prev = current % 10007;
  current = next % 10007;
}

console.log(current);
