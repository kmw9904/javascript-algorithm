const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const arr = input.slice(1).map((s) => s.trim().split(""));
// 접근 방법
// 인접한 사탕의 종류가 다를경우 하나하나 바꿔봐서 열과 행을 조사해서 연속의 길이가 있는지 없는지 찾는건가?
// 부르트 포스의 접근 조건을 잘 모르겠음
// 일단 dy, dx를 통해 이동해 보려고 함

const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let answer = 1;

for (let i = 0; i < N; i++) {
  answer = Math.max(answer, scanRow(i), scanCol(i));
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    for (const [dy, dx] of move) {
      const ny = y + dy;
      const nx = x + dx;

      if (ny < 0 || ny >= N || nx < 0 || nx >= N) {
        continue;
      }

      // 인접한 사탕의 종류가 다를경우
      if (arr[y][x] !== arr[ny][nx]) {
        // 스왑
        let change = arr[y][x];
        arr[y][x] = arr[ny][nx];
        arr[ny][nx] = change;

        // 행열 검사
        const result = Math.max(
          scanRow(y),
          scanRow(ny),
          scanCol(x),
          scanCol(nx)
        );

        if (answer < result) {
          answer = result;
        }

        // 스왑 원상 복귀
        change = arr[y][x];
        arr[y][x] = arr[ny][nx];
        arr[ny][nx] = change;
      }
    }
  }
}

function scanRow(y) {
  let maxLen = 1;
  let cnt = 1;

  for (let i = 1; i < N; i++) {
    if (arr[y][i] === arr[y][i - 1]) {
      cnt += 1;
    } else {
      if (cnt > maxLen) {
        maxLen = cnt;
      }
      cnt = 1;
    }
  }

  if (cnt > maxLen) {
    maxLen = cnt;
  }

  return maxLen;
}

function scanCol(x) {
  let maxLen = 1;
  let cnt = 1;

  for (let j = 1; j < N; j++) {
    if (arr[j][x] === arr[j - 1][x]) {
      cnt += 1;
    } else {
      if (cnt > maxLen) {
        maxLen = cnt;
      }
      cnt = 1;
    }
  }

  if (cnt > maxLen) {
    maxLen = cnt;
  }

  return maxLen;
}

console.log(answer);
