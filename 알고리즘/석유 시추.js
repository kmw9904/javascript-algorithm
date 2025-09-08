function bfs(y, x, visited, y_ln, x_ln, land) {
  let mx_dimension = 1
  const arr = [];

  const q = [[y, x]];

  while (q.length > 0) {
    let [y, x] = q.pop();

    for ([dy, dx] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const ny = y + dy;
      const nx = x + dx;

      if (
        ny < 0 ||
        ny >= y_ln ||
        nx < 0 ||
        nx >= x_ln ||
        visited[ny][nx] ||
        land[ny][nx] == 0
      ) {
        continue;
      }

      visited[ny][nx] = true;
      mx_dimension += 1
      arr.push([ny, nx]);
      q.push([ny, nx]);
    }
  }

  return [arr, mx_dimension];
}

function solution(land) {
  var answer = 0;
  const y_ln = land.length;
  const x_ln = land[0].length;

  // x_ln길이의 배열 만들기
  const result = Array.from({ length: x_ln }).fill(0);

  // dfs로 먼저 면적 구하기
  const visited = Array.from({ length: y_ln }, () =>
    Array.from({ length: x_ln }).fill(false)
  );
  for (let i = 0; i < y_ln; i++) {
    for (let j = 0; j < x_ln; j++) {
      if (land[i][j] !== 0 && !visited[i][j]) {
        visited[i][j] = true;
        const [arr, dimension] = bfs(
          i,
          j,
          visited,
          y_ln,
          x_ln,
          land,
        );

        const r_visited = Array.from({ length: x_ln }).fill(false);
        result[j] += dimension;
        r_visited[j] = true;

        for ([ny, nx] of arr) {
          if (!r_visited[nx]) {
            result[nx] += dimension;
            r_visited[nx] = true;
          }
        }
      }
    }
  }

  return result;
}

solution([
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
]);
