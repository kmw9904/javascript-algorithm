function solution(players, m, k) {
  var answer = 0;

  let lst = Array.from({ length: players.length + k }).fill(0);

  let server = 0;

  for (let i = 0; i < players.length; i++) {
    let requied = Math.floor(players[i] / m)

    server -= lst[i];

    const deficit = requied - server;

    if (deficit > 0) {
      answer += deficit;
      server += deficit;

      lst[i + k] += deficit;
    }
  }
  return answer;
}

solution(
  [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
  3,
  5,
  7
);
