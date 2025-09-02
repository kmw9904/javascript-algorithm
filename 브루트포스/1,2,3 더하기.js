const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = arr.shift();

for (let i = 0; i < T; i++) {
  const N = arr[i];
  let result = 0;

  let count = 0;

  let lst = [];

  function dfs() {
    if (count === N) {
      result += 1;
      return;
    }

    if (count > N) {
      return;
    }

    for (let i = 1; i <= 3; i++) {
      count += i;
      lst.push(i);
      dfs();
      lst.pop();
      count -= i;
    }
  }

  dfs();
  console.log(result);
}
