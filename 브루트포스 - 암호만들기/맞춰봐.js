const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(""));

const N = +input.shift().join(""); // ← 문자배열을 문자열로 합쳐서 숫자로
const lst = input.shift(); // ← 그대로 부호 문자배열

const arr = Array.from({ length: N }, () => Array.from({ length: N }).fill(""));

let idx = 0;

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    arr[i][j] = lst[idx];
    idx += 1;
  }
}

let result = [];
const answer = [];
function dfs(count) {
  if (count === N) {
    console.log(result.join(" "));
    process.exit(0);
  }

  if (arr[count][count] === "-") {
    for (let n = -10; n <= -1; n++) {
      let isTrue = true;
      for (let i = 0; i < count; i++) {
        let sum = 0;
        for (let j = i; j < count; j++) {
          sum += result[j];
        }

        if (arr[i][count] === "-") {
          if (sum + n >= 0) {
            isTrue = false;
          }
        } else if (arr[i][count] === "+") {
          if (sum + n <= 0) {
            isTrue = false;
          }
        } else if (arr[i][count] === "0") {
          if (sum + n !== 0) {
            isTrue = false;
          }
        }

        if (!isTrue) break;
      }

      if (isTrue) {
        result.push(n);
        dfs(count + 1);
        result.pop();
      }
    }
  } else if (arr[count][count] === "+") {
    for (let n = 1; n <= 10; n++) {
      let isTrue = true;
      for (let i = 0; i < count; i++) {
        let sum = 0;
        for (let j = i; j < count; j++) {
          sum += result[j];
        }

        if (arr[i][count] === "-") {
          if (sum + n >= 0) {
            isTrue = false;
          }
        } else if (arr[i][count] === "+") {
          if (sum + n <= 0) {
            isTrue = false;
          }
        } else if (arr[i][count] === "0") {
          if (sum + n !== 0) {
            isTrue = false;
          }
        }

        if (!isTrue) break;
      }

      if (isTrue) {
        result.push(n);
        dfs(count + 1);

        result.pop();
      }
    }
  } else if (arr[count][count] === "0") {
    const n = 0;
    let isTrue = true;
    for (let i = 0; i < count; i++) {
      let sum = 0;
      for (let j = i; j < count; j++) {
        sum += result[j];
      }

      if (arr[i][count] === "-") {
        if (sum + n >= 0) {
          isTrue = false;
        }
      } else if (arr[i][count] === "+") {
        if (sum + n <= 0) {
          isTrue = false;
        }
      } else if (arr[i][count] === "0") {
        if (sum + n !== 0) {
          isTrue = false;
        }
      }

      if (!isTrue) break;
    }

    if (isTrue) {
      result.push(0);
      dfs(count + 1);
      result.pop();
    }
  }
}

dfs(0);
// console.log(answer[0].join(" "));

// console.log(N, lst);
