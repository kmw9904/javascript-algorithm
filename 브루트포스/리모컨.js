const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = input[0][0],
  btnCount = input[1][0];
let btnArr = [];
if (btnCount > 0 && input[2]) {
  btnArr = input[2];
}

const nArr = N.toString().trim().split("").map(Number);

let count = Math.abs(N - 100);

// 접근 방법
// 채널안에 부러진 채널이 있는지 없는지 확인
// 없으면? 그대로 버튼 클릭
// 있으면? +1 할지 -1 할지 선택
// 어떨때 +1? 원래 값 이동할 경우에 가까운 값일 경우여야 +1한 값을 버튼 입력

// 그전에 버튼 누르는 값보다 +나 -로 이동하는게 더 빠를 경우도 생각해야함
// 예를 들어 101은 101입력보다 +1 하는게 이득

// 500,000번을 +만 눌러도 경우의 수가 500,000 밖에 안됌
// 최소 몇번을 눌러야 하는건가가 문제

function plus(cur) {
  if (cur > N) {
    return 500001;
  }

  return N - cur;
}

function minus(cur) {
  if (cur < N) {
    return 500001;
  }

  return cur - N;
}

let answer = [];

function dfs(n, free) {
  if (n === nArr.length) {
    let num = Number(answer.join(""));
    let result = Math.min(plus(num) + nArr.length, minus(num) + nArr.length);

    if (count > result) {
      count = result;
    }
    return;
  }

  for (let i = n; i < nArr.length; i++) {
    if (!btnArr.includes(nArr[i])) {
      if (free) {
        for (let d = 0; d <= 9; d++) {
          if (btnArr.includes(d)) {
            continue;
          }

          answer.push(d);
          dfs(i + 1, true);
          answer.pop();
        }
      } else {
        answer.push(nArr[i]);
        dfs(i + 1, false);
        answer.pop();
        return;
      }
    } else {
      // 부서진 버튼에 포함된다면 다른 번호를 넣어야 하는디...
      // 어떻게 하면 -한 값을 넣고 어떻게 하면 +값을 넣고
      // 어떻게 하면 그 값을 재귀함수로 사용할 수 있을까?

      for (let d = nArr[i]; d >= 0; d--) {
        if (!btnArr.includes(d)) {
          answer.push(d);
          dfs(i + 1, true);
          answer.pop();
        }
      }

      for (let d = nArr[i] + 1; d <= 9; d++) {
        if (!btnArr.includes(d)) {
          answer.push(d);
          dfs(i + 1, true);
          answer.pop();
        }
      }

      return;
    }
  }
}
dfs(0, false);

if (btnCount === 0) {
  console.log(nArr.length);
} else {
  console.log(count);
}
