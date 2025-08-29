// 조건 확인 N = 9
// 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// 가능한 정답이 여러가인 경우 -> 브루트 포스
// N은 9로 부르트포스 적합
// for문으로 모든 경우의 수 vs 재귀 방식으로 brute force로 가능한 모든 경우를 전부 시도

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const tall = input;
const arr = [];
let total = 0;
let found = false

function findDwarf(start) {
  if (arr.length === 7 && total === 100) {
    arr.sort((a,b) => a - b)
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
    found = true
    return;
  }

  // 가지치기
  if (total > 100) return

  for (let i = start; i < tall.length; i++) {
    arr.push(tall[i])
    total += tall[i]
    findDwarf(i + 1)
    total -= tall[i]
    arr.pop()

    if (found) return
  }
}

findDwarf(0);
