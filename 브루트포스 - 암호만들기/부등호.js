const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

const N = Number(input.shift()[0]);
const arr = input.shift();

let min_result = 0;
let max_result = 0;
let min_answer = Infinity;
let max_answer = -Infinity;

const result = [];
const answer = ["", ""];
const visited = Array.from({ length: 11 }).fill(false);

function dfs(count) {
  if (count === N + 1) {
    let sum = Number(result.join(""));

    if (min_answer > sum) {
      min_answer = sum;
      answer[1] = result.join("");
    }

    if (max_answer < sum) {
      max_answer = sum;
      answer[0] = result.join("");
    }
    return;
  }

  if (count === 0) {
    for (let i = 0; i <= 9; i++) {
      visited[i] = true;
      result.push(i);
      dfs(count + 1);
      result.pop();
      visited[i] = false;
    }
  } else {
    if (arr[count - 1] === ">") {
      for (let i = result[count - 1] - 1; i >= 0; i--) {
        if (!visited[i]) {
          visited[i] = true;
          result.push(i);
          dfs(count + 1);
          visited[i] = false;
          result.pop();
        }
      }
    } else if (arr[count - 1] === "<") {
      for (let i = result[count - 1] + 1; i < 10; i++) {
        if (!visited[i]) {
          visited[i] = true;
          result.push(i);
          dfs(count + 1);
          visited[i] = false;
          result.pop();
        }
      }
    }
  }
}

dfs(0);

console.log(answer.join("\n"));
