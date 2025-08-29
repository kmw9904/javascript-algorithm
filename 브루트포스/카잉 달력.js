const arr = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const T = arr.shift();

function gcd(a, b) {
  while (b !==0) {
    let temp = a % b
    a = b
    b = temp
  }

  return a
}

function lcm(a,b) {
  return (a*b) / gcd(a, b)
}

for (let i = 0; i < T; i++) {
  const M = arr[i][0],
    N = arr[i][1],
    x = arr[i][2],
    y = arr[i][3];
  
  // M과 N의 최대공약수
  let g = gcd(M, N)
  // 최대값인 최소 공배수
  let limit = lcm(M, N)
  let answer = -1

  let target = (y % N === 0 ? 0 : y % N)


  for (let start = x; start <=limit ; start+= M) {
    let modN = start % N === 0 ? 0 : start % N

    if (modN === target) {
      answer = start
      break
    }

  }

  console.log(answer)
}
