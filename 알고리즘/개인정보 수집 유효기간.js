function solution(today, terms, privacies) {
  var answer = [];
  let termsMap = {};
  // 편하게 기간을 맵으로 정리
  terms = terms.map((e) => e.split(" "));

  for (t of terms) {
    termsMap[t[0]] = Number(t[1]);
  }

  let todayArr = today.split(".").map((e) => Number(e));
  let idx = 0;
  for (p of privacies) {
    idx += 1;
    let arr = p.split(" ");
    let term = arr[0].split(".").map((e) => Number(e));

    term[1] += Number(termsMap[arr[1]]);

    while (term[1] > 12) {
      term[1] -= 12;
      term[0] += 1;
    }

    term[2] -= 1;

    if (term[2] <= 0) {
      term[2] += 28;
      term[1] -= 1;
      if (term[1] == 0) {
        term[0] -= 1;
        term[1] += 12;
      }
    }

    if (todayArr[0] > term[0]) {
      answer.push(idx);
    } else if (todayArr[0] == term[0] && todayArr[1] > term[1]) {
      answer.push(idx);
    } else if (
      todayArr[0] == term[0] &&
      todayArr[1] == term[1] &&
      todayArr[2] > term[2]
    ) {
      answer.push(idx);
    }
  }
  return answer;
}
solution("2020.01.01", ["A 100", "B 11"], ["2019.01.28 A", "2019.02.01 B"]);
