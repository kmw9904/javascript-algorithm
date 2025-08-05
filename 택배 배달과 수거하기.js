function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  let d_start = n - 1;
  let p_start = n - 1;
  while (d_start >= 0 || p_start >= 0) {
    while (d_start >= 0 && !deliveries[d_start]) {
      d_start -= 1;
    }

    while (p_start >= 0 && !pickups[p_start]) {
      p_start -= 1;
    }


    let far = Math.max(d_start, p_start) + 1;
    answer += far * 2;

    let remain_d = cap;
    while (d_start >= 0 && remain_d > 0) {
      let deliver = Math.min(deliveries[d_start], remain_d);

      deliveries[d_start] -= deliver;
      remain_d -= deliver;

      if (deliveries[d_start] === 0) d_start--;
    }

    let remain_p = cap;

    while (p_start >= 0 && remain_p > 0) {
      let pick = Math.min(pickups[p_start], remain_p);

      pickups[p_start] -= pick;
      remain_p -= pick;

      if (pickups[p_start] === 0) p_start--;
    }
  }

  return answer;
}
