const fs = require("fs");
const [N, L] = fs.readFileSync("/dev/stdin","utf8")
                 .trim().split(/\s+/).map(Number);

let found = false;
for (let k = L; k <= 100; k++) {
  const t = N - (k*(k-1))/2;
  if (t < 0) break;            // a도 음수가 되므로 이후 k는 모두 불가능
  if (t % k === 0) {
    const a = t / k;
    console.log(
      Array.from({length:k}, (_,i) => a+i).join(" ")
    );
    found = true;
    break;
  }
}

if (!found) console.log(-1);
