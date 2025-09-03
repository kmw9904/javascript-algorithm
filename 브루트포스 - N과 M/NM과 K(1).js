const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M, K] = arr.shift();

let result = 0;
let answer = -Infinity;

let visited = Array.from({ length: N }, () =>
  Array.from({ length: M }).fill(false)
);

const dic = [
  [0, 0],
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const isMove = [];

function dfs(y, x, count) {
  if (count === K) {
    answer = Math.max(answer, result);
    return;
  }

  for (let cy = y; cy < N; cy++) {
    for (let cx = 0; cx < M; cx++) {
      if (
        !visited[cy][cx] &&
        !isMove.some((ar) => ar.length === 2 && ar[0] === cy && ar[1] === cx)
      ) {
        visited[cy][cx] = true;

        for (const [dy, dx] of dic) {
          const ny = dy + cy;
          const nx = dx + cx;

          if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
            continue;
          }

          isMove.push([ny, nx]);
        }
        result += arr[cy][cx];
        dfs(cy, cx, count + 1);
        result -= arr[cy][cx];
        visited[cy][cx] = false;

        for (const [dy, dx] of dic) {
          const ny = dy + cy;
          const nx = dx + cx;

          if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
            continue;
          }

          isMove.pop();
        }
      }
    }
  }
}

dfs(0, 0, 0);
console.log(answer);
