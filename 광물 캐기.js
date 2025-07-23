function solution(picks, minerals) {
  let answer = 0;

  const block = [];
  for (let i = 0; i < minerals.length; i += 5) {
    const arr = minerals.slice(i, i + 5);
    const count_d = arr.filter((a) => a === "diamond").length;
    const count_i = arr.filter((a) => a === "iron").length;
    const count_s = arr.filter((a) => a === "stone").length;
    const mx_count = count_d * 25 + count_i * 5 + count_s * 1;
    block.push([count_d, count_i, count_s, mx_count]);
  }
  const useBlock = block.slice(
    0,
    picks.reduce((acc, cur) => (acc += cur), 0)
  );

  useBlock.sort((a, b) => b[3] - a[3]);

  for (let i = 0; i < useBlock.length; i++) {
    if (i < picks[0]) {
      answer += useBlock[i][0] * 1 + useBlock[i][1] * 1 + useBlock[i][2] * 1;
    } else if (i < picks[0] + picks[1]) {
      answer += useBlock[i][0] * 5 + useBlock[i][1] * 1 + useBlock[i][2] * 1;
    } else if (i < picks[0] + picks[1] + picks[2]) {
      answer += useBlock[i][0] * 25 + useBlock[i][1] * 5 + useBlock[i][2] * 1;
    }
  }
  console.log(answer);
  return answer;
}

solution(
  [1, 0, 0],
  ["iron", "iron", "stone", "iron", "stone", "diamond", "diamond"]
);
