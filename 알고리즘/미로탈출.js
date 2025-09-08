function bfs(y, x, end, map) {
  const visited = Array.from({ length: map.length }, () =>
    Array.from({ length: map[0].length }).fill(false)
  );
  const q = [];
  q.push([y, x, 0]);
  visited[y][x] = true;

  while (q.length > 0) {
    let [cy, cx, cnt] = q.shift();

    if (map[cy][cx] === end) {
      return cnt;
    }

    for ([dy, dx] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const ny = cy + dy;
      const nx = cx + dx;

      if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length) {
        continue;
      }

      if (!visited[ny][nx] && map[ny][nx] !== "X") {
        visited[ny][nx] = true;
        q.push([ny, nx, cnt + 1]);
      }
    }
  }
  return -1;
}

function solution(maps) {
  var answer = 0;
  let S, L;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        S = [i, j];
      } else if (maps[i][j] === "L") {
        L = [i, j];
      }
    }
  }

  const dist1 = bfs(S[0], S[1], "L", maps);
  if (dist1 === -1) return -1;
  const dist2 = bfs(L[0], L[1], "E", maps);
  if (dist2 === -1) return -1;

  return dist1 + dist2;
}

solution(["SOOOO", "OXLXO", "OXXXX", "OOOOO", "OOEOO"]);
