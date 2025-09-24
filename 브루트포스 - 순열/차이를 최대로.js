const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = input.shift()[0];
const arr = input.pop();

let answer = 0;

const visited = Array.from({ length: N }).fill(false);

let lst = [];

function dfs(count, result) {
  if (count === N) {
    answer = Math.max(answer, result);
    return;
  }

  if (lst.length === 0) {
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        lst.push(arr[i]);
        dfs(count + 1, result);
        lst.pop();
        visited[i] = false;
      }
    }
  } else {
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        lst.push(arr[i]);
        dfs(count + 1, result + Math.abs(lst[count - 1] - lst[count]));
        lst.pop();
        visited[i] = false;
      }
    }
  }
}

dfs(0,0);
console.log(answer);
