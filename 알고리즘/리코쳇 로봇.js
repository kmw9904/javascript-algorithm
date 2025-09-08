function bfs(y, x, board) {
  const visited = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }).fill(false)
  );

  visited[y][x] = true;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const q = [];
  q.push([y, x, 0]);
  let mn_result = Infinity;

  while (q.length > 0) {
    let [cy, cx, result] = q.pop();

    if (board[cy][cx] === "G" && mn_result > result) {
      mn_result = result;
      return mn_result;
    }

    for (const [dy, dx] of dirs) {
      let ny = cy;
      let nx = cx;

      // 미끄러지기: 'D'를 만나거나 경계 밖 나가기 전까지 계속 이동
      while (
        ny + dy >= 0 &&
        ny + dy < board.length &&
        nx + dx >= 0 &&
        nx + dx < board[0].length &&
        board[ny + dy][nx + dx] !== "D"
      ) {
        ny += dy;
        nx += dx;
        visited[ny][nx] = true;
      }

      // 방문 안 했으면 큐에 넣기
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        q.push([ny, nx, result + 1]);
      }
    }
  }

  return mn_result;
}

function solution(board) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "R") {
        answer = bfs(i, j, board);
      }
    }
  }
  return answer;
}

solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]);
