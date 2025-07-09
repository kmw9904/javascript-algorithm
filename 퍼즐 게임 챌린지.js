function solution(diffs, times, limit) {
  var answer = 0;
  // 이분 탐색
  let start = 1;
  let end = diffs[0];

  for (let i = 1; i < diffs.length; i++) {
    if (diffs[i] > end) {
      end = diffs[i];
    }
  }

  while (start <= end) {
    let result = 0;
    const middle = Math.floor((start + end) / 2);

    for (let i = 0; i < diffs.length; i++) {
      if (middle >= diffs[i]) {
        result += times[i];
      } else {
        const replay = diffs[i] - middle;
        result += (times[i] + times[i - 1]) * replay + times[i];
      }
      if (result > limit) break;
    }

    if (result <= limit) {
      answer = middle;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return answer;
}
