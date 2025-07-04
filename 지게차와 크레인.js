function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;

  storage = storage.map((s) => s.split(""));

  // 테두리에 점 추가
  storage.unshift(Array(m).fill("."));
  storage.push(Array(m).fill("."));

  for (let i = 0; i < storage.length; i++) {
    storage[i].unshift(".");
    storage[i].push(".");
  }

  for (const request of requests) {
    const target = request[0];

    // 크레인일 경우
    if (request.length == 2) {
      for (let i = 0; i < n + 2; i++) {
        for (let j = 0; j < m + 2; j++) {
          if (storage[i][j] == target) {
            storage[i][j] = ".";
          }
        }
      }
      // 지게차일경우
    } else {
      const visited = Array.from({ length: n + 2 }, () =>
        Array(m + 2).fill(false)
      );
      const q = [[0, 0]];
      visited[0][0] = true;

      while (q.length) {
        const [y, x] = q.shift();

        for (const [dy, dx] of [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
        ]) {
          const ny = y + dy;
          const nx = x + dx;

          if (
            ny < 0 ||
            ny >= n + 2 ||
            nx < 0 ||
            nx >= m + 2 ||
            visited[ny][nx]
          ) {
            continue;
          } else {
            if (storage[ny][nx] == ".") {
              visited[ny][nx] = true;
              q.push([ny, nx]);
            }
          }
        }
      }

      for (let i = 0; i < n + 2; i++) {
        for (let j = 0; j < m + 2; j++) {
          if (storage[i][j] !== target) continue;
          for (const [dy, dx] of [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
          ]) {
            const ni = i + dy;
            const nj = j + dx;

            if (
              ni < 0 ||
              ni >= n + 2 ||
              nj < 0 ||
              nj >= m + 2
            )
              continue;
            
            if (visited[ni][nj]) {
              storage[i][j] = '.'
              break
            }
          }
        }
      }
    }
  }

  return storage
    .flat()
    .reduce((acc, cur) => (cur !== "." ? (acc += 1) : acc), 0);
}

solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]);
