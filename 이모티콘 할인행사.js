function solution(users, emoticons) {
  const discount = [10, 20, 30, 40];
  const m = emoticons.length;
  let bestPlus = 0,
    bestSales = 0;

  function dfs(idx, cur) {
    if (idx === m) {
      let plus = 0,
        sales = 0;

      for (const [rate, price] of users) {
        let cost = 0;

        for (let i = 0; i < m; i++) {
          if (cur[i] >= rate) {
            cost += (emoticons[i] * (100 - cur[i])) / 100;
          }
        }

        if (cost > price) plus++;
        else sales += cost;
      }

      if (plus > bestPlus || (plus === bestPlus && sales > bestSales)) {
        bestPlus = plus;
        bestSales = sales;
      }
      return;
    }

    for (const rate of discount) {
      cur[idx] = rate;
      dfs(idx + 1, cur);
    }
  }

  dfs(0, Array(m).fill(0));

  return [bestPlus, bestSales];
}

solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);
