const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const answer = [];

for (let i = 0; i < input.length; i++) {
  const N = input[i].shift();

  if (N === 0) {
    break;
  }

  const arr = input[i];

  const visited = Array.from({ length: N }).fill(false);

  const result = [];

  function dfs(count, start) {
    if (count === 6) {
      answer.push(result.join(" "));
      return;
    }

    for (let i = start; i < N; i++) {
      result.push(arr[i]);
      dfs(count + 1, i + 1);
      result.pop();
    }
  }
  dfs(0, 0);

  answer.push("");
}

console.log(answer.join("\n"));
