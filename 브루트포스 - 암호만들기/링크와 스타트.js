const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = arr.shift()[0];

let startTeam = [];
let linkTeam = [];

let answer = Infinity;

const visited = Array.from({ length: N + 1 }).fill(false);

function dfs(start) {
  if (startTeam.length >= 1) {
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        linkTeam.push(i);
      }
    }

    let sCount = 0;
    let lCount = 0;

    if (startTeam.length === 1) {
      sCount = 0;
    } else {
      for (let i = 0; i < startTeam.length - 1; i++) {
        for (let j = i + 1; j < startTeam.length; j++) {
          sCount +=
            arr[startTeam[i] - 1][startTeam[j] - 1] +
            arr[startTeam[j] - 1][startTeam[i] - 1];
        }
      }
    }

    if (linkTeam.length === 1) {
      lCount = 0;
    } else {
      for (let i = 0; i < linkTeam.length - 1; i++) {
        for (let j = i + 1; j < linkTeam.length; j++) {
          lCount +=
            arr[linkTeam[i] - 1][linkTeam[j] - 1] +
            arr[linkTeam[j] - 1][linkTeam[i] - 1];
        }
      }
    }

    linkTeam = [];
    answer = Math.min(answer, Math.abs(sCount - lCount));
  }

  if (answer === 0) {
    return;
  }

  for (let i = start; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      startTeam.push(i);
      dfs(i + 1);
      visited[i] = false;
      startTeam.pop();
    }
  }
}

dfs(1);

console.log(answer);
