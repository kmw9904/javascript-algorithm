progresses = [93, 30, 55];
speeds = [1, 30, 5];

function solution(progresses, speeds) {
  var answer = [];
  let result = 0;
  let start = 0;
  let day = 0;
  while (start < progresses.length) {
    while (progresses[start] + speeds[start] * day < 100) {
      day += 1;
    }

    while (progresses[start] + speeds[start] * day >= 100) {
      start += 1;
      result += 1;
    }

    answer.push(result);
    result = 0;
  }
  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
