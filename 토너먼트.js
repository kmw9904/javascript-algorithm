const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

let [N, k_num, i_num] = input.split(" ").map(Number);
let round = 0
while (k_num !== i_num) {
  k_num = Math.ceil(k_num / 2)
  i_num = Math.ceil(i_num / 2)

  round += 1
}

console.log(round)
