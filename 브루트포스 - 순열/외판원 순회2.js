const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];
const arr = input;

const visited = Array.from({ length: N }).fill(false);

let answer = Infinity;
const lst = [];

function dfs(count, result) {
  if (result > answer) return;
  if (count === N) {
    if (arr[lst[count - 1]][lst[0]] === 0) {
      return
    }
    result += arr[lst[count - 1]][lst[0]];

    answer = Math.min(answer, result);
    return;
  }

  if (lst.length === 0) {
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        lst.push(i);
        dfs(count + 1, result);
        visited[i] = false;
        lst.pop();
      }
    }
  } else {
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        const last = lst[count - 1];
        const w = arr[last][i];
        if (w === 0) continue;
        visited[i] = true;
        lst.push(i);
        dfs(count + 1, result + w);
        lst.pop();
        visited[i] = false;
      }
    }
  }
}
dfs(0, 0);
console.log(answer);
