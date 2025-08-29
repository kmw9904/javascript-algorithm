const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

let E = input[0],
  S = input[1],
  M = input[2];

let answer = 1;
while (true) {
  if (
    E === ((answer - 1) % 15) + 1 &&
    S === ((answer - 1) % 28) + 1 &&
    M === ((answer - 1) % 19) + 1
  ) {
    console.log(answer);
    break;
  }
  answer += 1;
}
