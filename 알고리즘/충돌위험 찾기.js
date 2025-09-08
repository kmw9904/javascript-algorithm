function bfs(point, route, arr) {
  let [from_y, from_x] = point;
  let [to_y, to_x] = route;
  let result = 1;
  arr[from_y][from_x].push(result)

  while (from_y !== to_y) {
    if (from_y > to_y) {
      from_y -= 1;
      result += 1;
      arr[from_y][to_x].push(result);
    } else if (from_y < to_y) {
      from_y += 1;
      result += 1;
      arr[from_y][to_x].push(result);
    }
  }

  while (from_x !== to_x) {
    if (from_x > to_x) {
      from_x -= 1;
      result += 1;
      arr[from_y][from_x].push(result);
    } else if (from_x < to_x) {
      from_x += 1;
      result += 1;
      arr[from_y][from_x].push(result);
    }
  }

  return;
}

function solution(points, routes) {
  var answer = 0;
  let ln = 0;
  // 최대의 길이 구하기
  for (let [a, b] of points) {
    if (a > ln) {
      ln = a;
    } else if (b > ln) {
      ln = b;
    }
  }

  // 배열 생성 (각각의 단계를 배열안에 넣고 함수 호출로 배열을 비교함)
  const arr = Array.from({ length: ln + 1 }, () =>
    Array.from({ length: ln + 1 }, () => [])
  );

  for (const route of routes) {
    bfs(points[route[0] - 1], points[route[1] - 1], arr);
  }

  for (let i = 0; i < ln; i++) {
    for (let j = 0; j < ln; j++) {
      if (arr[i][j].length > 1) {
        for (const num of arr[i][j]) {
          if (arr[i][j].filter((x) => x === num).length > 1) {
            answer += 1;
            break;
          }
        }
      }
    }
  }
  return arr;
}

solution(
  [
    [3, 2],
    [6, 4],
    [4, 7],
    [1, 4],
  ],
  [
    [4, 2],
    [1, 3],
    [4, 2],
    [4, 3],
  ]
);
