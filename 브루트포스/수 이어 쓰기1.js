const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

let result = 0
let len = 1
let start = 1

while (true) {
  const end = Math.min(N, start * 10 -1)

  if (end < start) break

  const count = end - start + 1

  result += count * len

  start *= 10
  len += 1
}



console.log(result);
