function timeToMinutes(time) {
  const [hour, min] = time.split(":").map(Number);
  return hour * 60 + min;
}

function solution(plans) {
  const answer = [];
  const stack = [];
  plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]));

  while (plans.length) {
    const current = plans.shift();

    if (plans.length > 0) {
      const next = plans[0];

      if (
        timeToMinutes(next[1]) - timeToMinutes(current[1]) >=
        Number(current[2])
      ) {
        let available =
          timeToMinutes(next[1]) -
          timeToMinutes(current[1]) -
          Number(current[2]);
        answer.push(current[0]);

        while (available > 0 || stack.length > 0) {
          let next_stack = stack.pop();

          if (Number(next_stack[2]) > available) {
            next_stack[2] = Number(next_stack[2]) - available;
            available = 0;
            stack.push(next_stack);
          } else {
            available -= Number(next_stack[2]);
            answer.push(next_stack[0]);
          }
        }
      } else {
        current[2] =
          Number(current[2]) -
          (timeToMinutes(next[1]) - timeToMinutes(current[1]));

        stack.push(current);
      }
    } else {
      answer.push(current[0]);

      while (stack.length > 0) {
        const result = stack.pop();
        answer.push(result[0]);
      }
    }
  }

  return answer;
}

solution([
  ["korean", "11:40", "30"],
  ["english", "12:10", "20"],
  ["math", "12:30", "40"],
]);
