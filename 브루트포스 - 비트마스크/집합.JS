const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim().split(" "));

const N = input.shift();
let S = [];
function program(method, num) {
  const x = Number(num);
  const idx = S.indexOf(x);

  if (method === "add") {
    S.push(x);
  } else if (method === "remove") {
    if (idx === -1) {
      return;
    } else {
      S.splice(idx, 1);
    }
  } else if (method === "check") {
    if (idx === -1) {
      console.log(0);
    } else {
      console.log(1);
    }
  } else if (method === "toggle") {
    if (idx === -1) {
      S.push(x);
    } else {
      S.splice(idx, 1);
    }
  } else if (method === "all") {
    S = [];

    for (let i = 1; i <= 20; i++) {
      S.push(i);
    }
  } else if (method === "if") {
    S = [];
  }
}

for (let i = 0; i < N; i++) {
  program(input[i][0], input[i][1]);
}
