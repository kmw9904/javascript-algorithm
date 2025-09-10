const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = arr.shift()[0];

const startTeam = [];
let linkTeam = [];

const visited = Array.from({ length: N + 1 }).fill(false);

let answer = Infinity;

function dfs(start) {
  if (answer === 0) {
    return;
  }

  if (startTeam.length === N / 2) {
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        linkTeam.push(i);
      }
    }
    let sCount = 0;
    let lCount = 0;
    for (let i = 0; i < N / 2 - 1; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        sCount +=
          arr[startTeam[i] - 1][startTeam[j] - 1] +
          arr[startTeam[j] - 1][startTeam[i] - 1];
        lCount +=
          arr[linkTeam[i] - 1][linkTeam[j] - 1] +
          arr[linkTeam[j] - 1][linkTeam[i] - 1];
      }
    }

    linkTeam = [];
    const result = Math.abs(sCount - lCount);
    answer = Math.min(answer, result);
    return;
  }

  for (let i = start; i <= N; i++) {
    if (startTeam.length < N / 2 && !visited[i]) {
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
