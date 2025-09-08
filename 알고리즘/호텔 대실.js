function getTime(time) {
  const formattedTime = time.replace(":", "");

  const totalMinutes =
    Number(formattedTime.slice(0, 2)) * 60 + Number(formattedTime.slice(2, 4));

  return totalMinutes;
}

function solution(book_time) {
  let answer = [];

  book_time.forEach((time) => {
    time[0] = getTime(time[0]);
    time[1] = getTime(time[1]);
  });

  book_time.sort((a, b) => a[0] - b[0]);

  book_time.forEach((time) => {
    if (answer.length === 0) {
      answer.push(time);
    } else {
      let isChange = false;
      for (let i = 0; i < answer.length; i++) {
        if (time[0] > answer[i][1]) {
          answer.splice(i, 1);
          answer.push(time);
          isChange = true;
          break;
        }
      }

      if (!isChange) {
        answer.push(time);
      }
    }
  });

  console.log(answer.length);
  return answer.length;
}

solution([
  ["00:01", "00:10"],
  ["00:19", "00:29"],
]);
