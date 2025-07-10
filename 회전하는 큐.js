const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// const input = `32 6\n27 16 30 11 6 23`.trim().split("\n");

const [N, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function right(num) {
  while (lst[0] !== num) {
    const r = lst.pop();
    lst.unshift(r);
    result += 1;
  }
  return;
}

function left(num) {
  while (lst[0] !== num) {
    const l = lst.shift();
    lst.push(l);
    result += 1;
  }
  return;
}

let result = 0;

const lst = Array.from({ length: N }, (_, i) => i + 1);

for (num of arr) {
  if (lst.findIndex((x) => x === num) > Math.floor(lst.length / 2)) {
    right(num);
  } else {
    left(num);
  }

  lst.shift();
}

console.log(result);
