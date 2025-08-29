const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let N = input[0][0],
  M = input[0][1];

let arr = input.slice(1);

// 일자 직사각형
let bar = [
  // 일자 직사각형
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],

  // 정사각형
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],

  // L자
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, -1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [-1, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0,0],
    [0,1],
    [1,0],
    [2,0],
  ],
  [
    [0,0],
    [0,-1],
    [1,0],
    [2,0],
  ],
  

  // 번개모형
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, -1],
    [2, -1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [-1, 1],
    [-1, 2],
  ],

  // ㅜ모형
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, -1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 1],
  ],
];

let answer = 0;

function dfs(y, x) {
  for (const shape of bar) {
    let isCompleted = true;
    let sum = 0;
    for (const [dy, dx] of shape) {
      const ny = y + dy,
        nx = x + dx;

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
        isCompleted = false;
        break;
      }

      sum += arr[ny][nx];
    }

    if (isCompleted) {
      answer = Math.max(answer, sum);
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    dfs(y, x);
  }
}

console.log(answer);
